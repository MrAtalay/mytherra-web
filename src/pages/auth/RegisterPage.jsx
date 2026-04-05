import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/register/RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1️⃣ Frontend validation
    if (data.password !== data.passwordConfirm) {
      setError("Şifreler uyuşmuyor.");
      return;
    }

    if (!data.loreAccept) {
      setError("Mytherra’nın kaderini kabul etmelisin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Kayıt başarısız");
      }

      // 2️⃣ Başarılı kayıt → Login’e yönlendir
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        {/* HEADER */}
        <header className="auth-header">
          <h1>Dünyaya Katıl</h1>
          <p>Mytherra evrenine adım atmak için hesabını oluştur.</p>
        </header>

        {/* FORM */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <p className="login-error">{error}</p>}

          <div className="form-group">
            <label>Kullanıcı Adı</label>
            <input
              type="text"
              name="username"
              placeholder="Gölgelerde bilinecek adın"
              required
            />
          </div>

          <div className="form-group">
            <label>E-Posta</label>
            <input
              type="email"
              name="email"
              placeholder="you@mytherra.world"
              required
            />
          </div>

          <div className="form-group">
            <label>Şifre</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-group">
            <label>Şifre Tekrar</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" name="loreAccept" />
              <span>Mytherra’nın karanlık kaderini kabul ediyorum</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn primary full"
            disabled={loading}
          >
            {loading ? "Kaydediliyor..." : "Kayıt Ol"}
          </button>
        </form>

        {/* FOOTER */}
        <footer className="auth-footer">
          <p>
            Zaten bir hesabın var mı? <Link to="/login">Giriş Yap</Link>
          </p>
        </footer>
      </section>
    </main>
  );
}
