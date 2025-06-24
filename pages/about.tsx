// pages/about.tsx

export default function About({ message }: { message: string }) {
  return (
    <div>
      <h1>Aboutページ</h1>
      <p>{message}</p>
    </div>
  );
}

// これがあると SSG になる！
export async function getStaticProps() {
  return {
    props: {
      message: "これはSSGでビルド時に生成された内容です",
    },
  };
}
