import { useEffect } from "react";

export default function VirtualSellerCentered() {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI3NmQ4MTEyNjVjOWU0MTY4YTJlNjAxOTZjY2FlZDE5YSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc2ZDgxMTI2NWM5ZTQxNjhhMmU2MDE5NmNjYWVkMTlhL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjJhNTgzMTM1OGRlZTQ3NjBhZThkNGRjODM1N2RmN2Y0IiwidXNlcm5hbWUiOiI1Y2EwMTNhYmU3OWI0MmU0OTVhODA0NzUyODllMGJkNyJ9&inIFrame=1";

    const container = document.getElementById("heygen-centered-container");
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allow = "microphone";
    iframe.title = "HeyGen Virtual Seller";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    container.appendChild(iframe);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
      {/* خط علوي ذهبي */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center animate-fade-in-up">
        <div className="relative group w-full">
          {/* التوهج الخلفي */}
          <div
            className="absolute -inset-4 bg-gradient-to-br from-[#003B4A] to-[#004B5A]
                       rounded-3xl blur opacity-30 group-hover:opacity-50
                       transition duration-500"
          />

          {/* إطار الفيديو */}
          <div
            className="relative bg-gradient-to-br from-[#003B4A] to-[#004B5A]
                       rounded-3xl p-4 shadow-2xl"
          >
            <div
              id="heygen-centered-container"
              className="rounded-2xl overflow-hidden shadow-xl border border-[#D9C18E]/40 w-full"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
