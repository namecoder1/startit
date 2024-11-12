import Image from "next/image";
import Link from "next/link";
import { auth, signIn } from "@/auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const session = await auth();
  return (
    <section>
      {session && session?.user ? (
        <div className="flex flex-col mx-auto w-fit my-60 items-center justify-center gap-y-3">
          <h1>Welcome!</h1>
          <Image
            src={`${session.user.image}`}
            alt={`${session.user.name}`}
            width={100}
            height={100}
            className="rounded-full border-[1px]"
          />
          <p>{session?.user.name}</p>
        </div>
      ) : (
        <Card className="mx-10 sm:mx-auto w-fit my-60">
          <CardHeader className="text-center mx-4">
            <CardTitle>Registrati ora!</CardTitle>
            <CardDescription>Scegli il servizio più comodo e entra nella community di StartIt!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center gap-3">
              <form action={async () => {
                'use server'
                await signIn('github', {
                  prompt: 'select_account'
                })
              }}>
                <Button type='submit'><FaGithub />Registrati con GitHub</Button>
              </form>
              <form
                action={async () => {
                  "use server"
                  await signIn("google", {
                    prompt: 'select_account'
                  })
                }}
              >
                <Button type="submit" className="bg-red-500"><FaGoogle />Registrati con Google</Button>
              </form>
            </div>
          </CardContent>
          <CardFooter>
          <div className="flex items-center justify-center w-full gap-x-3 text-xs mt-5">
              <Link href='/policy/privacy'>Privacy Policy</Link>
              <Link href='/policy/cookies'>Cookies Policy</Link>
            </div>
          </CardFooter>
        </Card>
      )}
    </section>
  );
}
