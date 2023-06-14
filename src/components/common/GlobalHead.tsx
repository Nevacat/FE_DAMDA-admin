import Head from "next/head";

function GlobalHead() {
  return (
    <Head>
      <title>Yeolda 열다 - admin</title>
      <meta
        name="description"
        content="옷장정리 서비스 열다의 ADMIN페이지 입니다."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default GlobalHead;
