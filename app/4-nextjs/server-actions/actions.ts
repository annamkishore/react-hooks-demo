'use server'

// server action
export async function greetUser(prevState: any, formData: FormData) {

  const name = formData.get('name')?.toString() || 'Guest'
  return { message: `Namaste, ${name}!` }
}
