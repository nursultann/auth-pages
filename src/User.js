// ООП: класс User — модель пользователя
export class User {
  constructor(username, password) {
    this.username = username
    this.password = password // в реальном проекте — хэш!
    this.createdAt = new Date().toLocaleString('ru-RU')
  }

  // Проверка пароля
  checkPassword(password) {
    return this.password === password
  }

  // Сохранить в localStorage
  save() {
    const users = User.getAll()
    if (users.find(u => u.username === this.username)) {
      throw new Error('Пользователь уже существует')
    }
    users.push({ username: this.username, password: this.password, createdAt: this.createdAt })
    localStorage.setItem('users', JSON.stringify(users))
  }

  // Получить всех пользователей
  static getAll() {
    return JSON.parse(localStorage.getItem('users') || '[]')
  }

  // Найти по имени
  static findByUsername(username) {
    const data = User.getAll().find(u => u.username === username)
    if (!data) return null
    const user = new User(data.username, data.password)
    user.createdAt = data.createdAt
    return user
  }

  // Текущая сессия
  static saveSession(username) {
    localStorage.setItem('session', username)
  }

  static getSession() {
    const username = localStorage.getItem('session')
    if (!username) return null
    return User.findByUsername(username)
  }

  static clearSession() {
    localStorage.removeItem('session')
  }
}
