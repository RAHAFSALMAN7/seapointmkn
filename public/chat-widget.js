console.log("WIDGET LOADED AND RUNNING");

"use strict";
var ChatWidget = (() => {
  var Pe = Object.defineProperty;
  var be = Object.getOwnPropertySymbols;
  var We = Object.prototype.hasOwnProperty,
    Ye = Object.prototype.propertyIsEnumerable;
  var xe = (b, m, n) =>
    m in b
      ? Pe(b, m, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (b[m] = n),
    ne = (b, m) => {
      for (var n in m || (m = {})) We.call(m, n) && xe(b, n, m[n]);
      if (be) for (var n of be(m)) Ye.call(m, n) && xe(b, n, m[n]);
      return b;
    };

        var E = (b, m, n) =>
        new Promise((f, r) => {
            var X = (y) => {
                try {
                i(n.next(y));
                } catch (u) {
                r(u);
                }
            },
            _ = (y) => {
                try {
                i(n.throw(y));
                } catch (u) {
                r(u);
                }
            },
            i = (y) =>
                y.done ? f(y.value) : Promise.resolve(y.value).then(X, _);
            i((n = n.apply(b, m)).next());
        });
        (function () {
          let b = {
              webhookUrl: "https://n8n.srv1004057.hstgr.cloud/webhook/makn",
              theme: {
                primaryColor: "#007bff",
                secondaryColor: "#0056b3",
                userMessageBg: "#007bff",
                botMessageBg: "#f0f0f0",
                userMessageText: "#ffffff",
                botMessageText: "#333333",
              },
              welcomeMessage: null,
              animations: !0,
              branding: null,
              responseAccessor: "reply",
              elevenlabsAgentId: "agent_8901kcr7zm7zfc4apfx49wfam89j",
              elevenlabsApiKey: "sk_02cc7992a735fb48f4d296d5800efffe36e1e7e93d9fb45f",
              callButtonEnabled: 1,
            },
            m = window.ChatWidgetConfig || {},
            n = ne(ne({}, b), m),
            f = document.currentScript;
          if (
            (f &&
              ((n.webhookUrl = f.getAttribute("data-webhook") || n.webhookUrl),
              (n.theme.primaryColor =
                f.getAttribute("data-primary-color") || n.theme.primaryColor),
              (n.theme.secondaryColor =
                f.getAttribute("data-secondary-color") ||
                n.theme.secondaryColor),
              (n.theme.userMessageBg =
                f.getAttribute("data-user-bg") || n.theme.userMessageBg),
              (n.theme.botMessageBg =
                f.getAttribute("data-bot-bg") || n.theme.botMessageBg),
              (n.theme.userMessageText =
                f.getAttribute("data-user-text") || n.theme.userMessageText),
              (n.theme.botMessageText =
                f.getAttribute("data-bot-text") || n.theme.botMessageText),
              (n.welcomeMessage =
                f.getAttribute("data-welcome") || n.welcomeMessage),
              (n.animations = f.getAttribute("data-animations") !== "false"),
              (n.branding = f.getAttribute("data-branding") || n.branding),
              (n.responseAccessor =
                f.getAttribute("data-response-path") || n.responseAccessor)),
            !n.webhookUrl)
          ) {
            console.error(
              "Chat widget: webhookUrl is required in ChatWidgetConfig or data-webhook attribute"
            );
            return;
          }
          let r = n.theme,
            X = n.webhookUrl,
            _ = n.welcomeMessage,
            i = n.animations,
            y = n.branding,
            u = {
              chat: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
              mic: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>',
              send: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
              expand:
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
              collapse:
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
              close:
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
              phone:
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
              phoneOff:
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg>',
            };
          function ye() {
            let e = "chat-widget-session-id",
              t = localStorage.getItem(e);
            return (
              t ||
                (typeof crypto != "undefined" && crypto.randomUUID
                  ? (t = crypto.randomUUID())
                  : (t = `session-${Date.now()}-${Math.random()
                      .toString(36)
                      .substr(2, 9)}`),
                localStorage.setItem(e, t)),
              t
            );
          }
          let ae = ye();
          function ve() {
            let e = "chat-widget-language",
              t = localStorage.getItem(e);
            return t || ((t = "en"), localStorage.setItem(e, t)), t;
          }
          function Ce(e) {
            localStorage.setItem("chat-widget-language", e);
          }
          let v = ve(),
            ke = {
              en: {
                title: "Chat with us",
                placeholder: "Type a message...",
                send: "Send",
                you: "You",
                bot: "Bot",
                error: "Error",
                expand: "Expand",
                collapse: "Collapse",
                listening: "Listening...",
                voiceInput: "Voice input",
                clearChat: "Clear chat",
                clearConfirm: "Clear all messages?",
                welcomeTitle: "Welcome",
                nameLabel: "Your Name",
                phoneLabel: "Phone Number",
                startChat: "Start Chat",
                namePlaceholder: "Enter your name",
                phonePlaceholder: "Enter your phone number",
              },
              ar: {
                title: "\u062A\u062D\u062F\u062B \u0645\u0639\u0646\u0627",
                placeholder:
                  "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u0629...",
                send: "\u0625\u0631\u0633\u0627\u0644",
                you: "\u0623\u0646\u062A",
                bot: "\u0628\u0648\u062A",
                error: "\u062E\u0637\u0623",
                expand: "\u062A\u0648\u0633\u064A\u0639",
                collapse: "\u062A\u0635\u063A\u064A\u0631",
                listening:
                  "\u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639...",
                voiceInput:
                  "\u0625\u062F\u062E\u0627\u0644 \u0635\u0648\u062A\u064A",
                clearChat:
                  "\u0645\u0633\u062D \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
                clearConfirm:
                  "\u0645\u0633\u062D \u062C\u0645\u064A\u0639 \u0627\u0644\u0631\u0633\u0627\u0626\u0644\u061F",
                welcomeTitle: "\u0645\u0631\u062D\u0628\u0627",
                nameLabel: "\u0627\u0633\u0645\u0643",
                phoneLabel:
                  "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
                startChat:
                  "\u0628\u062F\u0621 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
                namePlaceholder:
                  "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645\u0643",
                phonePlaceholder:
                  "\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643",
              },
            };
          function s(e) {
            return ke[v][e] || e;
          }
          let Ee = `
    .chat-widget-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${r.primaryColor};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: all 0.3s ease;
      ${
        i
          ? `
      animation: buttonBounce 0.6s ease-out 0.5s;
      `
          : ""
      }
    }
    
    ${
      i
        ? `
    @keyframes buttonBounce {
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(0.95); }
      75% { transform: scale(1.05); }
    }
    `
        : ""
    }
    
    .chat-widget-button:hover {
      transform: scale(1.1);
      background: ${r.secondaryColor};
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    .chat-widget-button:active {
      ${
        i
          ? `
      transform: scale(0.95);
      `
          : ""
      }
    }
    
    .chat-widget-call-button {
      position: fixed;
      bottom: 20px;
      right: 90px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${r.primaryColor};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: ${n.callButtonEnabled ? "flex" : "none"};
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: all 0.3s ease;
      ${
        i
          ? `
      animation: buttonBounce 0.6s ease-out 0.7s;
      `
          : ""
      }
    }
    
    .chat-widget-call-button:hover {
      transform: scale(1.1);
      background: ${r.secondaryColor};
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    .chat-widget-call-button:active {
      ${
        i
          ? `
      transform: scale(0.95);
      `
          : ""
      }
    }
    
    .chat-widget-call-button.calling {
      background: #10b981;
      animation: pulse 1.5s infinite;
    }
    
    .chat-widget-call-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 10001;
      display: none;
      align-items: center;
      justify-content: center;
      ${
        i
          ? `
      animation: fadeIn 0.3s ease-out;
      `
          : ""
      }
    }
    
    .chat-widget-call-overlay.active {
      display: flex;
    }
    
    ${
      i
        ? `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    `
        : ""
    }
    
    .chat-widget-call-card {
      background: white;
      border-radius: 20px;
      padding: 40px;
      width: 400px;
      max-width: 90vw;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
      ${
        i
          ? `
      animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      `
          : ""
      }
    }
    
    ${
      i
        ? `
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    `
        : ""
    }
    
    .chat-widget-call-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    
    .chat-widget-call-title {
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
    }
    
    .chat-widget-call-close {
      background: #f3f4f6;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
      transition: all 0.2s;
    }
    
    .chat-widget-call-close:hover {
      background: #e5e7eb;
      color: #1f2937;
    }
    
    .chat-widget-call-user {
      font-size: 18px;
      font-weight: 500;
      color: #374151;
      margin-bottom: 20px;
    }
    
    .chat-widget-call-status {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    .chat-widget-call-timer {
      font-size: 32px;
      font-weight: 300;
      color: #1f2937;
      margin-bottom: 40px;
      font-variant-numeric: tabular-nums;
    }
    
    .chat-widget-waveform {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin-bottom: 40px;
    }
    
    .chat-widget-waveform-bar {
      width: 4px;
      background: ${r.primaryColor};
      border-radius: 2px;
      transition: height 0.1s ease;
    }
    
    .chat-widget-end-call-btn {
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
    
    .chat-widget-end-call-btn:hover {
      background: #dc2626;
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
    }
    
    .chat-widget-end-call-btn:active {
      transform: scale(0.95);
    }
    
    .chat-widget-panel {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
      display: none;
      flex-direction: column;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      ${
        i
          ? `
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      `
          : ""
      }
    }
    
    .chat-widget-panel.open {
      display: flex;
      ${
        i
          ? `
      animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `
          : ""
      }
    }
    
    ${
      i
        ? `
    @keyframes slideInUp {
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    `
        : ""
    }
    
    .chat-widget-panel.expanded {
      left: 0;
      top: 0;
      bottom: 0;
      right: auto;
      width: 400px;
      height: 100vh;
      border-radius: 0;
      box-shadow: 2px 0 24px rgba(0, 0, 0, 0.2);
    }
    
    .chat-widget-panel.rtl {
      direction: rtl;
    }
    
    .chat-widget-panel.rtl .chat-widget-message.user {
      margin-right: auto;
      margin-left: 0;
    }
    
    .chat-widget-panel.rtl .chat-widget-message.bot {
      align-self: flex-end;
    }
    
    .chat-widget-header {
      background: ${r.primaryColor};
      color: white;
      padding: 15px;
      border-radius: 10px 10px 0 0;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    
    .chat-widget-header-title {
      flex: 1;
    }
    
    .chat-widget-header-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    
    .chat-widget-panel.expanded .chat-widget-header {
      border-radius: 0;
    }
    
    .chat-widget-lang-btn,
    .chat-widget-expand-btn,
    .chat-widget-close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    
    .chat-widget-expand-btn,
    .chat-widget-close-btn {
      font-size: 18px;
    }
    
    .chat-widget-lang-btn:hover,
    .chat-widget-expand-btn:hover,
    .chat-widget-close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      ${
        i
          ? `
      transform: scale(1.1);
      `
          : ""
      }
    }
    
    .chat-widget-lang-btn:active,
    .chat-widget-expand-btn:active,
    .chat-widget-close-btn:active {
      ${
        i
          ? `
      transform: scale(0.95);
      `
          : ""
      }
    }
    
    .chat-widget-clear-btn {
      background: transparent;
      border: 1px solid #e5e7eb;
      color: #6b7280;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      transition: all 0.2s;
      margin: 12px 15px;
      display: block;
      width: calc(100% - 30px);
    }
    
    .chat-widget-clear-btn:hover {
      background: #f9fafb;
      border-color: #d1d5db;
      color: #374151;
    }
    
    .chat-widget-user-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .chat-widget-user-info h3 {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
    }
    
    .chat-widget-form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .chat-widget-form-label {
      font-size: 13px;
      font-weight: 500;
      color: #374151;
    }
    
    .chat-widget-form-input {
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
    }
    
    .chat-widget-form-input:focus {
      border-color: ${r.primaryColor};
    }
    
    .chat-widget-start-btn {
      background: ${r.primaryColor};
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 20px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.2s;
      margin-top: 10px;
    }
    
    .chat-widget-start-btn:hover {
      background: ${r.secondaryColor};
      ${
        i
          ? `
      transform: translateY(-1px);
      box-shadow: 0 4px 12px ${r.primaryColor}40;
      `
          : ""
      }
    }
    
    .chat-widget-start-btn:active {
      ${
        i
          ? `
      transform: translateY(0);
      `
          : ""
      }
    }
    
    .chat-widget-start-btn:disabled {
      background: #d1d5db;
      cursor: not-allowed;
      transform: none !important;
    }
    
    .chat-widget-messages {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      ${
        i
          ? `
      scroll-behavior: smooth;
      `
          : ""
      }
    }
    
    .chat-widget-message {
      max-width: 80%;
      padding: 10px;
      border-radius: 8px;
      word-wrap: break-word;
      font-size: 14px;
      line-height: 1.4;
      ${
        i
          ? `
      animation: messageSlideIn 0.3s ease-out;
      `
          : ""
      }
    }
    
    ${
      i
        ? `
    @keyframes messageSlideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    `
        : ""
    }
    
    .chat-widget-message.user {
      background: ${r.userMessageBg};
      color: ${r.userMessageText};
      align-self: flex-end;
      margin-left: auto;
    }
    
    .chat-widget-message.bot {
      background: ${r.botMessageBg};
      color: ${r.botMessageText};
      align-self: flex-start;
    }
    
    .chat-widget-message.error {
      background: #ffebee;
      color: #c62828;
      align-self: flex-start;
    }
    
    .chat-widget-message code {
      background: rgba(0, 0, 0, 0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', Consolas, monospace;
      font-size: 13px;
    }
    
    .chat-widget-message pre {
      background: rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
      margin: 8px 0;
    }
    
    .chat-widget-message pre code {
      background: none;
      padding: 0;
      font-size: 12px;
      line-height: 1.4;
    }
    
    .chat-widget-message a {
      color: inherit;
      text-decoration: underline;
    }
    
    .chat-widget-message.user a {
      color: white;
    }
    
    .chat-widget-message.bot a {
      color: #007bff;
    }
    
    .chat-widget-message strong {
      font-weight: 700;
    }
    
    .chat-widget-message em {
      font-style: italic;
    }
    
    .chat-widget-typing {
      background: #f0f0f0;
      color: #333;
      align-self: flex-start;
      max-width: 80px;
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      gap: 4px;
      align-items: center;
    }
    
    .chat-widget-typing-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #999;
      animation: typing-bounce 1.4s infinite;
    }
    
    .chat-widget-typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .chat-widget-typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes typing-bounce {
      0%, 60%, 100% {
        transform: translateY(0);
        opacity: 0.7;
      }
      30% {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
    
    .chat-widget-branding {
      text-align: center;
      padding: 8px;
      font-size: 11px;
      color: #9ca3af;
      border-top: 1px solid #f3f4f6;
      background: #fafafa;
    }
    
    .chat-widget-branding a {
      color: #6b7280;
      text-decoration: none;
    }
    
    .chat-widget-branding a:hover {
      color: ${r.primaryColor};
    }
    
    .chat-widget-input-container {
      padding: 15px;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 10px;
    }
    
    .chat-widget-input {
      flex: 1;
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      font-size: 14px;
      outline: none;
      font-family: inherit;
      transition: all 0.2s ease;
    }
    
    .chat-widget-input:focus {
      border-color: ${r.primaryColor};
      ${
        i
          ? `
      box-shadow: 0 0 0 3px ${r.primaryColor}20;
      `
          : ""
      }
    }
    
    .chat-widget-send {
      background: ${r.primaryColor};
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    
    .chat-widget-send:hover {
      background: ${r.secondaryColor};
      ${
        i
          ? `
      transform: translateY(-1px);
      box-shadow: 0 2px 8px ${r.primaryColor}40;
      `
          : ""
      }
    }
    
    .chat-widget-send:active {
      ${
        i
          ? `
      transform: translateY(0);
      `
          : ""
      }
    }
    
    .chat-widget-send:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none !important;
    }
    
    .chat-widget-mic {
      background: white;
      color: ${r.primaryColor};
      border: 2px solid ${r.primaryColor};
      border-radius: 50%;
      width: 44px;
      height: 44px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      position: relative;
    }
    
    .chat-widget-mic:hover {
      background: ${r.primaryColor};
      color: white;
      ${
        i
          ? `
      transform: scale(1.05);
      box-shadow: 0 4px 12px ${r.primaryColor}40;
      `
          : ""
      }
    }
    
    .chat-widget-mic:active {
      ${
        i
          ? `
      transform: scale(0.95);
      `
          : ""
      }
    }
    
    .chat-widget-mic.recording {
      background: #ff4444;
      border-color: #ff4444;
      color: white;
      animation: pulse 1.5s infinite;
    }
    
    .chat-widget-mic.recording::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid #ff4444;
      animation: ripple 1.5s infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
    
    @keyframes ripple {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }
    
    .chat-widget-voice-indicator {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 68, 68, 0.95);
      color: white;
      padding: 12px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 500;
      display: none;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10001;
    }
    
    .chat-widget-voice-indicator.active {
      display: flex;
    }
    
    .chat-widget-voice-wave {
      width: 20px;
      height: 20px;
      display: flex;
      gap: 3px;
      align-items: center;
    }
    
    .chat-widget-voice-wave span {
      width: 3px;
      height: 100%;
      background: white;
      border-radius: 2px;
      animation: wave 1s infinite ease-in-out;
    }
    
    .chat-widget-voice-wave span:nth-child(2) {
      animation-delay: 0.1s;
    }
    
    .chat-widget-voice-wave span:nth-child(3) {
      animation-delay: 0.2s;
    }
    
    @keyframes wave {
      0%, 100% {
        height: 40%;
      }
      50% {
        height: 100%;
      }
    }
  `,
            oe = document.createElement("style");
          (oe.textContent = Ee), document.head.appendChild(oe);
          function $e() {
            return `
      <button class="chat-widget-button" id="chat-widget-button">${
        u.chat
      }</button>
      <div class="chat-widget-panel ${
        v === "ar" ? "rtl" : ""
      }" id="chat-widget-panel">
        <div class="chat-widget-header">
          <span class="chat-widget-header-title" id="chat-widget-title">${s(
            "title"
          )}</span>
          <div class="chat-widget-header-actions">
            <button class="chat-widget-lang-btn" id="chat-widget-lang-btn" title="Language">
              ${v === "en" ? "AR" : "EN"}
            </button>
            <button class="chat-widget-expand-btn" id="chat-widget-expand-btn" title="${s(
              "expand"
            )}">
              ${u.expand}
            </button>
            <button class="chat-widget-close-btn" id="chat-widget-close-btn" title="Close">
              ${u.close}
            </button>
          </div>
        </div>
        <div class="chat-widget-messages" id="chat-widget-messages"></div>
        <button class="chat-widget-clear-btn" id="chat-widget-clear-btn">${s(
          "clearChat"
        )}</button>
        ${y ? `<div class="chat-widget-branding">${y}</div>` : ""}
        <div class="chat-widget-input-container">
          <button class="chat-widget-mic" id="chat-widget-mic" title="${s(
            "voiceInput"
          )}">
            ${u.mic}
          </button>
          <input 
            type="text" 
            class="chat-widget-input" 
            id="chat-widget-input" 
            placeholder="${s("placeholder")}"
            autocomplete="off"
          />
          <button class="chat-widget-send" id="chat-widget-send">${
            u.send
          }</button>
        </div>
        <div class="chat-widget-voice-indicator" id="chat-widget-voice-indicator">
          <div class="chat-widget-voice-wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span id="chat-widget-voice-text">${s("listening")}</span>
        </div>
      </div>
    `;
          }
          let Le = $e(),
            Me = `
    <button class="chat-widget-call-button" id="chat-widget-call-button">${u.phone}</button>
    <div class="chat-widget-call-overlay" id="chat-widget-call-overlay">
      <div class="chat-widget-call-card">
        <div class="chat-widget-call-header">
          <span class="chat-widget-call-title" id="chat-widget-call-title">Voice Call</span>
          <button class="chat-widget-call-close" id="chat-widget-call-close-btn">
            ${u.close}
          </button>
        </div>
        <div class="chat-widget-call-user" id="chat-widget-call-user">Connecting...</div>
        <div class="chat-widget-call-timer" id="chat-widget-call-timer">00:00</div>
        <div class="chat-widget-call-status" id="chat-widget-call-status">Initializing call...</div>
        <div class="chat-widget-waveform" id="chat-widget-waveform"></div>
        <button class="chat-widget-end-call-btn" id="chat-widget-end-call-btn">
          ${u.phoneOff}
        </button>
      </div>
    </div>
  `,
            ie = document.createElement("div");
          (ie.innerHTML = Le), document.body.appendChild(ie);
          let re = document.createElement("div");
          (re.innerHTML = Me), document.body.appendChild(re);
          let Be = document.getElementById("chat-widget-button"),
            $ = document.getElementById("chat-widget-panel"),
            se = document.getElementById("chat-widget-lang-btn"),
            le = document.getElementById("chat-widget-title"),
            Ie = document.getElementById("chat-widget-close-btn"),
            Y = document.getElementById("chat-widget-call-button"),
            G = document.getElementById("chat-widget-call-overlay"),
            Te = document.getElementById("chat-widget-call-user"),
            Z = document.getElementById("chat-widget-call-timer"),
            S = document.getElementById("chat-widget-call-status"),
            ce = document.getElementById("chat-widget-waveform"),
            de = document.getElementById("chat-widget-end-call-btn"),
            ge = document.getElementById("chat-widget-call-close-btn"),
            A = document.getElementById("chat-widget-messages"),
            h = document.getElementById("chat-widget-input"),
            j = document.getElementById("chat-widget-send"),
            L = document.getElementById("chat-widget-expand-btn"),
            H = document.getElementById("chat-widget-mic"),
            pe = document.getElementById("chat-widget-voice-indicator"),
            ue = document.getElementById("chat-widget-voice-text"),
            F = document.getElementById("chat-widget-clear-btn");
          function Se() {
            L &&
              L.addEventListener("click", () => {
                $.classList.toggle("expanded"),
                  $.classList.contains("expanded")
                    ? ((L.innerHTML = u.collapse), (L.title = s("collapse")))
                    : ((L.innerHTML = u.expand), (L.title = s("expand")));
              }),
              F &&
                F.addEventListener("click", () => {
                  confirm(s("clearConfirm")) &&
                    ((A.innerHTML = ""), _ && P(_, "bot"));
                }),
              H &&
                H.addEventListener("click", () => {
                  R ? N() : he();
                }),
              j &&
                j.addEventListener("click", () => {
                  fe(h.value);
                }),
              h &&
                h.addEventListener("keypress", (e) => {
                  e.key === "Enter" && fe(h.value);
                });
          }
          Be.addEventListener("click", () => {
            $.classList.toggle("open"),
              $.classList.contains("open") && h && h.focus();
          }),
            Ie.addEventListener("click", () => {
              $.classList.remove("open");
            }),
            se.addEventListener("click", () => {
              (v = v === "en" ? "ar" : "en"),
                Ce(v),
                (se.textContent = v === "en" ? "AR" : "EN");
              let e = document.getElementById("chat-widget-name-input"),
                t = document.getElementById("chat-widget-phone-input"),
                a = document.getElementById("chat-widget-start-btn");
              if (e && t && a) {
                le.textContent = s("welcomeTitle");
                let o = document.querySelectorAll(".chat-widget-form-label");
                o[0] && (o[0].textContent = s("nameLabel")),
                  o[1] && (o[1].textContent = s("phoneLabel")),
                  (e.placeholder = s("namePlaceholder")),
                  (t.placeholder = s("phonePlaceholder")),
                  (a.textContent = s("startChat"));
              } else
                (le.textContent = s("title")),
                  h && (h.placeholder = s("placeholder")),
                  j && (j.innerHTML = u.send),
                  F && (F.textContent = s("clearChat")),
                  L &&
                    (L.title = $.classList.contains("expanded")
                      ? s("collapse")
                      : s("expand")),
                  H && (H.title = s("voiceInput")),
                  ue && (ue.textContent = s("listening"));
              v === "ar" ? $.classList.add("rtl") : $.classList.remove("rtl");
            }),
            Se(),
            _ && P(_, "bot");
          let x = null,
            R = !1,
            z = null,
            ee = [];
          if (
            "webkitSpeechRecognition" in window ||
            "SpeechRecognition" in window
          ) {
            let e = window.SpeechRecognition || window.webkitSpeechRecognition;
            (x = new e()),
              (x.continuous = !1),
              (x.interimResults = !1),
              (x.onresult = (t) => {
                let a = t.results[0][0].transcript;
                (h.value = a), N();
              }),
              (x.onerror = (t) => {
                console.error("Speech recognition error:", t.error), N();
              }),
              (x.onend = () => {
                N();
              });
          }
          function he() {
            return E(this, null, function* () {
              if (!R)
                try {
                  (R = !0),
                    H.classList.add("recording"),
                    pe.classList.add("active"),
                    x && ((x.lang = v === "ar" ? "ar-SA" : "en-US"), x.start());
                  let e = yield navigator.mediaDevices.getUserMedia({
                    audio: !0,
                  });
                  (z = new MediaRecorder(e)),
                    (ee = []),
                    (z.ondataavailable = (t) => {
                      ee.push(t.data);
                    }),
                    (z.onstop = () =>
                      E(null, null, function* () {
                        let t = new Blob(ee, { type: "audio/webm" }),
                          a = new FileReader();
                        a.readAsDataURL(t),
                          (a.onloadend = () => {
                            let o = a.result;
                            h.audioData = o;
                          }),
                          e.getTracks().forEach((o) => o.stop());
                      })),
                    z.start();
                } catch (e) {
                  console.error("Error starting recording:", e),
                    N(),
                    P("Microphone access denied or unavailable", "error");
                }
            });
          }
          function N() {
            R &&
              ((R = !1),
              H.classList.remove("recording"),
              pe.classList.remove("active"),
              x && x.stop(),
              z && z.state !== "inactive" && z.stop());
          }
          H.addEventListener("click", () => {
            R ? N() : he();
          });
          function Ae() {
            let e = document.createElement("div");
            (e.className = "chat-widget-typing"),
              (e.id = "chat-widget-typing-indicator");
            for (let t = 0; t < 3; t++) {
              let a = document.createElement("div");
              (a.className = "chat-widget-typing-dot"), e.appendChild(a);
            }
            return A.appendChild(e), (A.scrollTop = A.scrollHeight), e;
          }
          function me() {
            let e = document.getElementById("chat-widget-typing-indicator");
            e && e.remove();
          }
          function He(e) {
            return (
              (e = e.replace(
                /```(\w+)?\n([\s\S]*?)```/g,
                "<pre><code>$2</code></pre>"
              )),
              (e = e.replace(/`([^`]+)`/g, "<code>$1</code>")),
              (e = e.replace(/\*\*([^\*]+)\*\*/g, "<strong>$1</strong>")),
              (e = e.replace(/__([^_]+)__/g, "<strong>$1</strong>")),
              (e = e.replace(/\*([^\*]+)\*/g, "<em>$1</em>")),
              (e = e.replace(/_([^_]+)_/g, "<em>$1</em>")),
              (e = e.replace(
                /\[([^\]]+)\]\(([^\)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener">$1</a>'
              )),
              (e = e.replace(/\n/g, "<br>")),
              e
            );
          }
          function P(e, t) {
            let a = document.createElement("div");
            if (((a.className = `chat-widget-message ${t}`), t === "user"))
              a.textContent = `${s("you")}: ${e}`;
            else if (t === "bot") {
              let o = document.createElement("span");
              (o.textContent = `${s("bot")}: `), a.appendChild(o);
              let c = document.createElement("span");
              (c.innerHTML = He(e)), a.appendChild(c);
            } else a.textContent = `${s("error")}: ${e}`;
            A.appendChild(a), (A.scrollTop = A.scrollHeight);
          }
          function fe(e) {
            return E(this, null, function* () {
              if (e.trim()) {
                P(e, "user"), (h.value = ""), (j.disabled = !0), Ae();
                try {
                  let l = function (w, te) {
                    return te
                      .split(".")
                      .reduce((q, Ne) => (q == null ? void 0 : q[Ne]), w);
                  };
                  var t = l;
                  let a = { message: { text: e, language: v }, sessionId: ae };
                  h.audioData &&
                    ((a.message.audio = h.audioData), delete h.audioData);
                  let o = yield fetch(X, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(a),
                  });
                  if (!o.ok)
                    throw new Error(`HTTP ${o.status}: ${o.statusText}`);
                  let c = yield o.json(),
                    d = l(c, n.responseAccessor);
                  if (
                    (d ||
                      (d =
                        c.reply ||
                        c.output ||
                        c.message ||
                        c.response ||
                        c.text),
                    d)
                  )
                    me(), P(d, "bot");
                  else
                    throw new Error(
                      `Invalid response format: could not find response text using accessor "${n.responseAccessor}"`
                    );
                } catch (a) {
                  me();
                  let o =
                    a instanceof Error ? a.message : "Unknown error occurred";
                  P(o, "error");
                } finally {
                  (j.disabled = !1), h.focus();
                }
              }
            });
          }
          let K = [],
            V = null;
          function ze() {
            (ce.innerHTML = ""), (K = []);
            for (let e = 0; e < 25; e++) {
              let t = document.createElement("div");
              (t.className = "chat-widget-waveform-bar"),
                (t.style.height = "20px"),
                ce.appendChild(t),
                K.push(t);
            }
          }
          function De(e) {
            let t = K.length,
              a = Math.floor(e.length / t);
            for (let o = 0; o < t; o++) {
              let c = o * a,
                l = e.slice(c, c + a),
                d = l.reduce((te, q) => te + q, 0) / l.length,
                w = Math.max(20, (d / 255) * 80);
              K[o].style.height = `${w}px`;
            }
          }
          let M = "idle",
            O = 0,
            D = null,
            g = null,
            p = null,
            B = null,
            C = null,
            I = [],
            T = !1,
            U = null,
            k = !1;
          function Ue() {
            if (O === 0) return;
            let e = Math.floor((Date.now() - O) / 1e3),
              t = Math.floor(e / 60),
              a = e % 60;
            Z.textContent = `${String(t).padStart(2, "0")}:${String(a).padStart(
              2,
              "0"
            )}`;
          }
          function W(e) {
            switch (((M = e), e)) {
              case "connecting":
                (S.textContent = "Connecting..."),
                  Y.classList.add("calling"),
                  G.classList.add("active"),
                  (Te.textContent = "Voice Call"),
                  ze();
                break;
              case "active":
                (S.textContent = "Call in progress"),
                  (O = Date.now()),
                  (D = window.setInterval(Ue, 1e3));
                break;
              case "ended":
                (S.textContent = "Call ended"),
                  Y.classList.remove("calling"),
                  D && (clearInterval(D), (D = null)),
                  setTimeout(() => {
                    G.classList.remove("active"),
                      (Z.textContent = "00:00"),
                      (O = 0);
                  }, 1e3);
                break;
              case "idle":
                Y.classList.remove("calling"),
                  G.classList.remove("active"),
                  (Z.textContent = "00:00"),
                  (O = 0),
                  D && (clearInterval(D), (D = null));
                break;
            }
          }
          function _e() {
            return E(this, null, function* () {
              if (M !== "idle") {
                console.log("Call already in progress or ending");
                return;
              }
              if (!n.elevenlabsApiKey) {
                (S.textContent = "Error: API key not configured"),
                  setTimeout(() => W("idle"), 2e3);
                return;
              }
              try {
                W("connecting"),
                  (C = yield navigator.mediaDevices.getUserMedia({
                    audio: !0,
                  })),
                  (p = new AudioContext({ sampleRate: 16e3 }));
                let e = p.createMediaStreamSource(C);
                (B = p.createAnalyser()), (B.fftSize = 256), e.connect(B);
                let t = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${n.elevenlabsAgentId}&xi-api-key=${n.elevenlabsApiKey}`;
                (g = new WebSocket(t)),
                  (g.binaryType = "arraybuffer"),
                  (g.onopen = () => {
                    console.log("ElevenLabs WebSocket connected"),
                      W("active"),
                      je(),
                      Re();
                  }),
                  (g.onmessage = (a) =>
                    E(null, null, function* () {
                      var o, c;
                      if (typeof a.data == "string")
                        try {
                          let l = JSON.parse(a.data);
                          if (
                            (console.log("ElevenLabs message type:", l.type),
                            l.type === "conversation_initiation_metadata")
                          )
                            console.log(
                              "Conversation initialized, ID:",
                              l.conversation_initiation_metadata_event
                                .conversation_id
                            );
                          else if (l.type === "audio") {
                            let d =
                              ((o = l.audio_event) == null
                                ? void 0
                                : o.audio_base_64) || l.audio;
                            d && (I.push(d), T || J());
                          } else
                            l.type === "interruption"
                              ? (console.log(
                                  "User interrupted AI - stopping current audio and clearing queue"
                                ),
                                we(),
                                (I = []),
                                (T = !1))
                              : l.type === "ping"
                              ? g == null ||
                                g.send(
                                  JSON.stringify({
                                    type: "pong",
                                    event_id:
                                      (c = l.ping_event) == null
                                        ? void 0
                                        : c.event_id,
                                  })
                                )
                              : l.type === "agent_response" &&
                                console.log(
                                  "Agent response:",
                                  l.agent_response_event
                                );
                        } catch (l) {
                          console.error("Error parsing message:", l);
                        }
                    })),
                  (g.onerror = (a) => {
                    console.error("WebSocket error:", a),
                      k || ((S.textContent = "Connection error"), Q());
                  }),
                  (g.onclose = (a) => {
                    console.log(
                      "WebSocket closed. Code:",
                      a.code,
                      "Reason:",
                      a.reason
                    ),
                      !k &&
                        M !== "ended" &&
                        M !== "idle" &&
                        ((S.textContent = a.reason || "Connection closed"),
                        Q());
                  });
              } catch (e) {
                console.error("Error starting call:", e),
                  (S.textContent =
                    e instanceof Error ? e.message : "Failed to start call"),
                  C && (C.getTracks().forEach((t) => t.stop()), (C = null)),
                  p && (p.close(), (p = null)),
                  setTimeout(() => {
                    W("idle"), (k = !1);
                  }, 2e3);
              }
            });
          }
          function Oe() {
            return E(this, null, function* () {
              return `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${n.elevenlabsAgentId}`;
            });
          }
          function je() {
            if (!p || !C || !g) return;
            let e = p.createMediaStreamSource(C),
              t = p.createScriptProcessor(4096, 1, 1);
            (t.onaudioprocess = (a) => {
              if ((g == null ? void 0 : g.readyState) === WebSocket.OPEN) {
                let o = a.inputBuffer.getChannelData(0),
                  c = new Int16Array(o.length);
                for (let d = 0; d < o.length; d++)
                  c[d] = Math.max(-32768, Math.min(32767, o[d] * 32768));
                let l = {
                  user_audio_chunk: btoa(
                    String.fromCharCode(...new Uint8Array(c.buffer))
                  ),
                };
                g.send(JSON.stringify(l));
              }
            }),
              e.connect(t),
              t.connect(p.destination);
          }
          function we() {
            if (U) {
              try {
                U.stop(), U.disconnect();
              } catch (e) {}
              U = null;
            }
          }
          function J() {
            return E(this, null, function* () {
              if (T || I.length === 0) return;
              T = !0;
              let e = I.shift();
              try {
                if (!p) return;
                let t = atob(e),
                  a = new Uint8Array(t.length);
                for (let w = 0; w < t.length; w++) a[w] = t.charCodeAt(w);
                let o = new Int16Array(a.buffer),
                  c = new Float32Array(o.length);
                for (let w = 0; w < o.length; w++) c[w] = o[w] / 32768;
                let l = p.createBuffer(1, c.length, 16e3);
                l.getChannelData(0).set(c);
                let d = p.createBufferSource();
                (d.buffer = l),
                  d.connect(p.destination),
                  (U = d),
                  (d.onended = () => {
                    (U = null), (T = !1), I.length > 0 && J();
                  }),
                  d.start(0);
              } catch (t) {
                console.error("Error playing AI audio:", t),
                  (U = null),
                  (T = !1),
                  I.length > 0 && J();
              }
            });
          }
          function qe(e) {
            return E(this, null, function* () {
              I.push(e), T || J();
            });
          }
          function Re() {
            if (!B) return;
            let e = B.frequencyBinCount,
              t = new Uint8Array(e);
            function a() {
              M === "active" &&
                B &&
                ((V = requestAnimationFrame(a)),
                B.getByteFrequencyData(t),
                De(t));
            }
            a();
          }
          function Q() {
            if (k) {
              console.log("Already cleaning up, skipping duplicate endCall");
              return;
            }
            (k = !0),
              console.log("Ending call and cleaning up..."),
              we(),
              (I = []),
              (T = !1),
              g && (g.close(), (g = null)),
              p && (p.close(), (p = null), (B = null)),
              C && (C.getTracks().forEach((e) => e.stop()), (C = null)),
              V && (cancelAnimationFrame(V), (V = null)),
              W("ended"),
              setTimeout(() => {
                W("idle"),
                  (k = !1),
                  console.log("Call cleanup complete, ready for new call");
              }, 1100);
          }
          Y &&
            Y.addEventListener("click", () => {
              console.log(
                "Call button clicked. Current state:",
                M,
                "isCleaningUp:",
                k
              ),
                M === "idle" && !k
                  ? _e()
                  : console.log(
                      "Cannot start call - state:",
                      M,
                      "cleaning up:",
                      k
                    );
            }),
            de &&
              de.addEventListener("click", () => {
                Q();
              }),
            ge &&
              ge.addEventListener("click", () => {
                Q();
              }),
            console.log("Chat widget initialized with session:", ae),
            console.log(
              "Call mode:",
              n.callButtonEnabled ? "enabled" : "disabled"
            );
        })();
      })();


