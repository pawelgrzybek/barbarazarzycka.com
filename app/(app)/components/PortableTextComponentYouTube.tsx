const PortableTextComponentYouTube = ({ value }: any) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: "0",
        overflow: "hidden",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${value.id}`}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "0",
        }}
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default PortableTextComponentYouTube;
