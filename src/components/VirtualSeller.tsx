import { useEffect } from "react";

export default function VirtualSellerCentered() {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI3NmQ4MTEyNjVjOWU0MTY4YTJlNjAxOTZjY2FlZDE5YSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc2ZDgxMTI2NWM5ZTQxNjhhMmU2MDE5NmNjYWVkMTlhL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjJhNTgzMTM1OGRlZTQ3NjBhZThkNGRjODM1N2RmN2Y0IiwidXNlcm5hbWUiOiI1Y2EwMTNhYmU3OWI0MmU0OTVhODA0NzUyODllMGJkNyJ9&inIFrame=1";

    const clientWidth = document.body.clientWidth;

    // wrapper
    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    // container
    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    // iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allow = "microphone";
    iframe.title = "HeyGen Streaming";
    iframe.role = "dialog";

    // styles
    const style = document.createElement("style");
    style.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        left: 40px;
        bottom: 40px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 8px 24px rgba(0,0,0,0.12);
        transition: all linear 0.15s;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        background: #000;
      }

      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }

      #heygen-streaming-embed.expand {
        ${
          clientWidth < 540
            ? "height:266px;width:96%;left:50%;transform:translateX(-50%);"
            : "height:366px;width:calc(366px * 16 / 9);"
        }
        border-radius: 12px;
        border: 0;
      }

      #heygen-streaming-container,
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;

    let visible = false;
    let initial = false;

    window.addEventListener("message", (e) => {
      if (e.origin !== host) return;
      if (!e.data || e.data.type !== "streaming-embed") return;

      if (e.data.action === "init") {
        initial = true;
        wrapDiv.classList.toggle("show", initial);
      }

      if (e.data.action === "show") {
        visible = true;
        wrapDiv.classList.toggle("expand", visible);
      }

      if (e.data.action === "hide") {
        visible = false;
        wrapDiv.classList.toggle("expand", visible);
      }
    });

    container.appendChild(iframe);
    wrapDiv.appendChild(style);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    return () => {
      wrapDiv.remove();
    };
  }, []);

  return null; // ما في UI، كله floating
}
