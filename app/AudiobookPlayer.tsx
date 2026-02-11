"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { CHAPTERS, TOTAL_DURATION } from "@/lib/chapters";
import { SUBS } from "@/lib/subtitles";
import styles from "./player.module.css";

export default function AudiobookPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const subBoxRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const chNumRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const scrubIndRef = useRef<HTMLDivElement>(null);

  const curChapter = useRef(-1);
  const curSubIdx = useRef(-1);
  const [playing, setPlaying] = useState(false);
  const [titleVisible, setTitleVisible] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const scrubTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrubbingRef = useRef(false);
  const wasPlayingRef = useRef(false);
  const tapOkRef = useRef(true);

  // Preload images
  useEffect(() => {
    const assets = new Set<string>();
    CHAPTERS.forEach((c) => c.scene.ch.forEach((x) => assets.add(x.a)));
    assets.forEach((a) => {
      const img = new Image();
      img.src = `/assets/${a}`;
    });
    // Set initial scene
    setTimeout(() => {
      if (!isEnded) {
        setScene(0);
        curChapter.current = 0;
      }
    }, 80);
  }, []);

  // Audio event listeners
  useEffect(() => {
    const au = audioRef.current;
    if (!au) return;

    // Set VHS-style audio (pitch shift when changing rate)
    if ("preservesPitch" in au) (au as any).preservesPitch = false;
    if ("webkitPreservesPitch" in au) (au as any).webkitPreservesPitch = false;

    const onPlay = () => {
      setPlaying(true);
      setIsEnded(false);
    };
    const onPause = () => {
      setPlaying(false);
    };
    const onEnded = () => {
      setPlaying(false);
      setIsEnded(true);
    };
    const onTimeUpdate = () => tick();

    au.addEventListener("play", onPlay);
    au.addEventListener("pause", onPause);
    au.addEventListener("ended", onEnded);
    au.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      au.removeEventListener("play", onPlay);
      au.removeEventListener("pause", onPause);
      au.removeEventListener("ended", onEnded);
      au.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  // Ghost icon sync
  useEffect(() => {
    const ghost = ghostRef.current;
    if (!ghost) return;
    const playIcon = ghost.querySelector(`.${styles.gPlay}`) as HTMLElement;
    const pauseIcon = ghost.querySelector(`.${styles.gPause}`) as HTMLElement;
    if (playIcon) playIcon.style.display = playing ? "none" : "";
    if (pauseIcon) pauseIcon.style.display = playing ? "" : "none";
    
    // Always show when paused, fade slightly when playing
    if (playing) {
      ghost.classList.remove(styles.vis);
    } else {
      ghost.classList.add(styles.vis);
    }
  }, [playing]);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      }
      if (e.code === "ArrowRight") {
        e.preventDefault();
        scrubBy(5);
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        scrubBy(-5);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [titleVisible]);

  // Mouse / Touch scrub logic
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let isDown = false;
    let startX = 0;
    let lastX = 0;

    const onStart = (x: number) => {
      isDown = true;
      startX = x;
      lastX = x;
      tapOkRef.current = true;
    };

    const onMove = (x: number, e?: Event) => {
      if (!isDown) return;
      if (Math.abs(x - startX) > 5) {
        if (e) e.preventDefault();
        tapOkRef.current = false;
        const dx = x - lastX;
        lastX = x;
        const secs = (dx / window.innerWidth) * 150;
        scrubBy(secs);
      }
    };

    const onEnd = () => {
      isDown = false;
    };

    const handleMouseDown = (e: MouseEvent) => onStart(e.clientX);
    const handleMouseMove = (e: MouseEvent) => onMove(e.clientX, e);
    const handleMouseUp = () => onEnd();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) onStart(e.touches[0].clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e);
    };
    const handleTouchEnd = () => onEnd();

    stage.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    stage.addEventListener("touchstart", handleTouchStart, { passive: true });
    stage.addEventListener("touchmove", handleTouchMove, { passive: false });
    stage.addEventListener("touchend", handleTouchEnd, { passive: true });

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      tapOkRef.current = false;
      const secs = e.deltaY * 0.04;
      scrubBy(secs);
    };
    stage.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      stage.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      stage.removeEventListener("touchstart", handleTouchStart);
      stage.removeEventListener("touchmove", handleTouchMove);
      stage.removeEventListener("touchend", handleTouchEnd);
      stage.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  const fmt = (s: number) => {
    const m = Math.floor(Math.abs(s) / 60);
    const sec = Math.floor(Math.abs(s) % 60);
    return (s < 0 ? "-" : "") + m + ":" + (sec < 10 ? "0" : "") + sec;
  };

  const start = () => {
    setTitleVisible(false);
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  const toggle = () => {
    if (titleVisible) return start();
    const au = audioRef.current;
    if (!au) return;
    if (au.paused) {
      au.play().catch(() => {});
    } else {
      au.pause();
    }
  };

  const scrubBy = (delta: number) => {
    const au = audioRef.current;
    if (!au) return;
    
    // Calculate new time but let the audio keep playing
    const newT = Math.max(0, Math.min(TOTAL_DURATION - 0.1, au.currentTime + delta));
    au.currentTime = newT;
    
    if (newT >= TOTAL_DURATION - 1) setIsEnded(true);
    else if (isEnded) setIsEnded(false);

    const ind = scrubIndRef.current;
    if (ind) {
      ind.textContent = fmt(newT);
      ind.classList.add(styles.vis);
    }

    if (!scrubbingRef.current) {
      scrubbingRef.current = true;
      wasPlayingRef.current = !au.paused;
      stageRef.current?.classList.add(styles.scrubbing);
      // Ensure it's playing for the "VHS" sound effect
      if (au.paused) au.play().catch(() => {});
    }

    // VHS style: speed affects playback rate and pitch
    // We use a slightly more aggressive rate for the "wind" feel
    const speed = Math.min(4, Math.max(0.5, Math.abs(delta) * 5));
    au.playbackRate = speed;

    if (scrubTimerRef.current) clearTimeout(scrubTimerRef.current);
    scrubTimerRef.current = setTimeout(() => {
      scrubbingRef.current = false;
      au.playbackRate = 1;
      stageRef.current?.classList.remove(styles.scrubbing);
      scrubIndRef.current?.classList.remove(styles.vis);
      
      // On iOS, keeping it playing is safer to avoid losing the audio context
      if (!wasPlayingRef.current) {
        au.pause();
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }, 200); // Slightly longer timeout for smoother FF/REW feel

    tick();
  };

  const tick = () => {
    const au = audioRef.current;
    if (!au) return;
    const t = au.currentTime;

    if (barFillRef.current) {
      barFillRef.current.style.width = (t / TOTAL_DURATION) * 100 + "%";
    }

    let ch = 0;
    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      if (t >= CHAPTERS[i].start) {
        ch = i;
        break;
      }
    }
    if (ch !== curChapter.current) {
      curChapter.current = ch;
      setScene(ch);
    }

    let si = -1;
    for (let i = SUBS.length - 1; i >= 0; i--) {
      if (t >= SUBS[i].t && t < SUBS[i].t + SUBS[i].d) {
        si = i;
        break;
      }
    }
    if (si !== curSubIdx.current) {
      curSubIdx.current = si;
      showSub(si);
    }
  };

  const showSub = (idx: number) => {
    const box = subBoxRef.current;
    if (!box) return;
    if (idx < 0) {
      box.classList.remove(styles.vis);
      box.classList.add(styles.out);
      return;
    }
    const cue = SUBS[idx];
    let h = "";
    for (const l of cue.l) {
      const isDlg = l.startsWith("-");
      const txt = l.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      h += `<div class="${styles.subLine}${isDlg ? ` ${styles.dlg}` : ""}">${txt}</div>`;
    }
    box.classList.remove(styles.vis);
    box.classList.add(styles.out);
    setTimeout(() => {
      box.innerHTML = h;
      box.classList.remove(styles.out);
      box.classList.add(styles.vis);
    }, 150);
  };

  const setScene = (idx: number) => {
    const scene = CHAPTERS[idx].scene;
    const stage = stageRef.current;
    const sc = sceneRef.current;
    const fd = fadeRef.current;
    const chN = chNumRef.current;
    if (!stage || !sc || !fd || !chN) return;

    stage.style.background = scene.bg[0];
    chN.textContent = `${idx + 1} / ${CHAPTERS.length}`;
    chN.classList.remove(styles.vis);
    setTimeout(() => chN.classList.add(styles.vis), 200);

    fd.classList.add(styles.on);
    setTimeout(() => {
      sc.innerHTML = "";
      const H = stage.offsetHeight;
      scene.ch.forEach((c, i) => {
        const el = document.createElement("div");
        el.className = `${styles.ch} ${styles[`e_${c.e}`]}`;
        const h = H * c.s;
        el.style.height = h + "px";
        el.style.left = `calc(${c.x}% - ${Math.round(h * 0.35)}px)`;
        el.style.top = `calc(${c.y}% - ${Math.round(h * 0.5)}px)`;
        const img = document.createElement("img");
        img.src = `/assets/${c.a}`;
        img.draggable = false;
        el.appendChild(img);
        sc.appendChild(el);
        setTimeout(() => {
          el.classList.add(styles.v);
          setTimeout(() => el.classList.add(styles[`i_${c.i}`]), 900);
        }, 80 + i * 200);
      });
      setTimeout(() => fd.classList.remove(styles.on), 80);
    }, 300);
  };

  const handleStageClick = () => {
    if (!tapOkRef.current) return;
    toggle();
  };

  return (
    <>
      {/* Title screen */}
      {titleVisible && (
        <div className={styles.title} onClick={start}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/brunosso_walking.png" alt="Brunosso" draggable={false} />
          <h1>Brunosso er BETA</h1>
          <p>Basert p&aring; karakterane til &Oslash;ystein Runde</p>
          <span className={styles.tap}>Trykk for &aring; lytte</span>
        </div>
      )}

      {/* App */}
      <div className={`${styles.app} ${isEnded ? styles.allowScroll : ""}`}>
        <div className={`${styles.stage} ${isEnded ? styles.ended : ""}`} ref={stageRef} onClick={handleStageClick}>
          <div className={styles.scene} ref={sceneRef}></div>
          <div className={styles.fade} ref={fadeRef}></div>
          <div className={styles.chNum} ref={chNumRef}></div>

          <div className={`${styles.endScreen} ${isEnded ? styles.vis : ""}`}>
            <h2>Slut</h2>
            <div className={styles.scrollMore}>Skroll ned for &aring; lese mer om Brunosso cinematic universe</div>
          </div>
        </div>

        {isEnded && (
          <div className={styles.pdfSection}>
            <object
              data="/assets/BRUNOSSO 1.0 FULL BOOK.pdf#toolbar=0&navpanes=0&view=FitH"
              type="application/pdf"
              className={styles.pdfFrame}
            >
              <p>
                Din enhet støtter ikke visning av PDF direkte. 
                <a href="/assets/BRUNOSSO 1.0 FULL BOOK.pdf">Last ned PDF her.</a>
              </p>
            </object>
          </div>
        )}

        <div className={styles.subs}>
          <div className={styles.subBox} ref={subBoxRef}></div>
        </div>

        <div
          className={styles.ghost}
          ref={ghostRef}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <svg className={styles.gPlay} viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg className={styles.gPause} viewBox="0 0 24 24" style={{ display: "none" }}>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </div>

        <div className={styles.scrubInd} ref={scrubIndRef}></div>

        <div className={styles.bar}>
          <div className={styles.barFill} ref={barFillRef}></div>
        </div>
      </div>

      <audio ref={audioRef} preload="auto">
        <source src="/audiobook/audiobook.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
