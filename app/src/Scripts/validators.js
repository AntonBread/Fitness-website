export function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export function validatePasswords(password, passwordConfirm) {
    if (password !== passwordConfirm) return false
    return password.length > 2
}