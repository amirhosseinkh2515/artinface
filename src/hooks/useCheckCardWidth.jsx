
const CardWidth = (windowSize,xs,sm,md,lg,xl,def) => {
    switch (windowSize) {
      case "xs":
        return xs;
      case "sm":
        return sm;
      case "md":
        return md;
      case "lg":
        return lg;
      case "xl":
        return xl;
      default:
        return def;
    }
  };


export default CardWidth;