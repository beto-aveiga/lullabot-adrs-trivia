const modules = import.meta.glob('./*.js', { eager: true, import: 'default' });

export const questions = Object.values(modules).filter(Boolean);
