'use client';

export default function Error({ error, reset }) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <main className="flex justify-center items-center flex-col gap-6 mt-20">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={handleReload}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
