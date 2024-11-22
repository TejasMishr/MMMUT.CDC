import React, { useRef } from "react";

export default function Lottie({ link,style}) {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        // <div className={styles.container}>
        //   <main className={styles.main}>
        <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            // controls
            loop
            mode="normal"
            src={link}
           style={{style}}
        ></lottie-player>
        //   </main>
        // </div>
    );
}