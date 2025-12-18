import { useEffect } from "react";

export default function VirtualSellerCentered() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      !function(window){
        const host="https://labs.heygen.com",
        url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI3NmQ4MTEyNjVjOWU0MTY4YTJlNjAxOTZjY2FlZDE5YSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc2ZDgxMTI2NWM5ZTQxNjhhMmU2MDE5NmNjYWVkMTlhL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjJhNTgzMTM1OGRlZTQ3NjBhZThkNGRjODM1N2RmN2Y0IiwidXNlcm5hbWUiOiI1Y2EwMTNhYmU3OWI0MmU0OTVhODA0NzUyODllMGJkNyJ9&inIFrame=1";

        const container = document.getElementById("heygen-container");
        if (!container) return;

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.allow = "microphone";
        iframe.title = "HeyGen Virtual Seller";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "0";

        container.appendChild(iframe);
      }(globalThis);
    `;
    document.body.appendChild(script);

    return () => {
      document.getElementById("heygen-container")?.replaceChildren();
      script.remove();
    };
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">

@@ -18,16 +49,11 @@ export default function VirtualSellerCentered() {
          <div className="relative bg-gradient-to-br from-[#003B4A] to-[#004B5A] 
                          rounded-3xl p-4 shadow-2xl">

            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D9C18E]/40">
              <iframe
                src="https://embed.liveavatar.com/v1/2faf3681-59e8-49e2-8c9e-33f1c9adb867"
                allow="microphone"
                title="LiveAvatar Embed"
                className="w-full"
                style={{ aspectRatio: "16/9" }}
              />
            </div>

            <div
              id="heygen-container"
              className="rounded-2xl overflow-hidden shadow-xl border border-[#D9C18E]/40 w-full"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </div>
