import { useEffect } from 'react';

const CalendarWidget = () => {
  useEffect(() => {
    // Cal.com script initialization
    const initCal = () => {
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // Initialize Cal
      (window as any).Cal("init", "sessao-de-ajuda", { origin: "https://app.cal.com" });
      
      // Configure UI
      (window as any).Cal.ns["sessao-de-ajuda"]("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    };

    // Initialize Cal.com when component mounts
    initCal();

  }, []);

  return null; // This component doesn't render anything visible
};

export default CalendarWidget;