import StarIcon from "@/assets/icons/star.svg";
import "./tape.css";

export const TapeSection = () => {
  const items = [
    "🟢 Open to Work",
    "Remote Ready",
    "Full Stack Dev",
    "Available Now",
    "AI-Augmented Dev",
    "India 🇮🇳",
  ];

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="tape-wrapper bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="tape-mask">
          <div className="tape-track">
            {/* First copy */}
            {items.map((text, i) => (
              <div className="tape-item" key={`a-${i}`}>
                <span>{text}</span>
                <StarIcon className="tape-icon" />
              </div>
            ))}

            {/* Duplicate copy for seamless loop */}
            {items.map((text, i) => (
              <div className="tape-item" key={`b-${i}`}>
                <span>{text}</span>
                <StarIcon className="tape-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
