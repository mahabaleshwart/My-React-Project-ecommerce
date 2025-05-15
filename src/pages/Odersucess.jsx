import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#111", // Dark background for better neon contrast
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#fff",
            transition: "all 0.3s ease-in-out"
        },
        title: {
            fontSize: "3rem",
            color: "#00FFAB", // Neon green color
            marginBottom: "20px",
            textShadow: "0 0 10px #00FFAB, 0 0 20px #00FFAB, 0 0 30px #00FFAB"
        },
        message: {
            fontSize: "1.2rem",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "0 0 5px #fff, 0 0 10px #fff"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.2rem",
            backgroundColor: "#FF00FF", // Neon pink color for button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            textDecoration: "none",
            boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF",
            textAlign: "center"
        },
        buttonHover: {
            backgroundColor: "#ff0099", // Lighter neon effect on hover
            boxShadow: "0 0 15px #FF00FF, 0 0 30px #FF00FF"
        }
    };

    // Handle hover effect for the button
    const handleButtonHover = (e, hovering) => {
        Object.assign(e.target.style, hovering ? styles.buttonHover : styles.button);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Your order is being processed.</p>
            <a
                href="/"
                style={styles.button}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
            >
                Go to Home
            </a>
        </div>
    );
}
