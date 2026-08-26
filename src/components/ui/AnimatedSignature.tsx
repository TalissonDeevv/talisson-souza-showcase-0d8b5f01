import signatureAutoral from "@/assets/signature-autoral.png";

type AnimatedSignatureProps = {
  className?: string;
};

const AnimatedSignature = ({ className = "" }: AnimatedSignatureProps) => {
  return (
    <div
      className={`animated-signature-wrapper relative w-full max-w-[1420px] select-none ${className}`}
      role="img"
      aria-label="Assinatura Talisson Souza"
    >
      <img
        src={signatureAutoral}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="animated-signature-image h-auto w-full object-contain"
      />
    </div>
  );
};

export default AnimatedSignature;
