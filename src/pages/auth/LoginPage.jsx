import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        })

      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Giriş başarısız");
      }

      // 🔐 TOKEN & USER KAYDET
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // 🚀 ANA SAYFA
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1 className="login-title">Giriş Yap</h1>
        <p className="login-subtitle">
          Hesabınla giriş yap ve dünyaya adım at
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="login-error">{error}</p>}

          <div className="form-group">
            <label>Kullanıcı Adı / E-posta</label>
            <input
              type="text"
              placeholder="kullanici@ornek.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Şifre</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn primary full"
            disabled={loading}
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <div className="login-footer">
          <span>Hesabın yok mu?</span>
          <button
            className="btn ghost small"
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </button>
        </div>
      </div>
    </main>
  );
}
