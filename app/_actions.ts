'use server'

import { getPosts } from '@/lib/post';
import { revalidatePath } from 'next/cache';



export async function getPostsAction () {
   await getPosts()
   revalidatePath('/')
}

/* 
export async function updateTodoAction(id: string, isCompleted: boolean) {
   await updateTodo(id, isCompleted)
   revalidatePath('/')
 }

 export async function deleteTodoAction(id: string) {
   await deleteTodo(id)
   revalidatePath('/')
 }
  */

