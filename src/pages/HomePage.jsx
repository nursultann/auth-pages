import { Link } from 'react-router-dom'

export function HomePage({ currentUser }) {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container text-center py-5">
        <i className="bi bi-shield-lock-fill text-primary" style={{ fontSize: 72 }}></i>
        <h1 className="fw-bold mt-3 mb-2">Auth App</h1>
        <p className="text-muted mb-4 fs-5">
          {/* Пример аутентификации на React + ООП + localStorage */}
        </p>

        {currentUser ? (
          <div>
            <p className="mb-3">Вы вошли как <strong>{currentUser.username}</strong></p>
            <Link className="btn btn-primary me-2" to="/dashboard">Перейти в кабинет</Link>
            <Link className="btn btn-outline-primary" to="/profile">Профиль</Link>
          </div>
        ) : (
          <div>
            <Link className="btn btn-primary me-2 px-4" to="/login">Войти</Link>
            <Link className="btn btn-outline-primary px-4" to="/register">Регистрация</Link>
          </div>
        )}

        <div className="row g-3 mt-5 justify-content-center">
          {[
            { icon: 'bi-box', color: 'primary', title: 'Класс User', desc: 'Модель с методами save(), checkPassword(), findByUsername()' },
            { icon: 'bi-hdd-fill', color: 'success', title: 'localStorage', desc: 'Хранение пользователей и сессии между перезагрузками' },
            { icon: 'bi-diagram-2', color: 'warning', title: 'Страницы', desc: 'Login, Register, Dashboard, Profile, Home' },
          ].map(item => (
            <div key={item.title} className="col-sm-4">
              <div className="card border-0 shadow-sm p-3" style={{ borderRadius: 12 }}>
                <i className={`bi ${item.icon} text-${item.color} fs-3 mb-2`}></i>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
