'use client'

import { useRouter } from 'next/navigation'

export default function singleProduct({ params }) {
  const router = useRouter()
  return (
    <div>
      <div className="container">
        <button onClick={() => router.back()}>Go back</button>
        <div>Product: {params.id}</div>
      </div>
    </div>
  );
}