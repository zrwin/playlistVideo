"use client";

import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/learning");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Head>
        <title>Login</title>
      </Head>
      <Card className="w-96 shadow-xl p-6 bg-white rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" placeholder="Enter your email" className="mt-1 w-full border-gray-300 focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Input type="password" placeholder="Enter your password" className="mt-1 w-full border-gray-300 focus:ring-2 focus:ring-blue-400" />
            </div>
            <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}