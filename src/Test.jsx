function Test() {
  const imgSrc = [
    "https://64.media.tumblr.com/fc21cf87431f3472ec8d6253b1d79163/7437c4b3bb201f63-d1/s1280x1920/ef4eea144871bf541a3237452cc10390802c998e.jpg",
  ];

  return (
    <>
      <h1 className="text-red-700">Flowers cards</h1>
      <div className="flex min-h-screen h-screen">
        <img
          src={imgSrc}
          alt="hhh"
          className="h-auto object-contain max-w-full drop-shadow-md rounded-md"
        />
      </div>
    </>
  );
}

export default Test;
