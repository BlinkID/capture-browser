import { CapturedImage } from "react-use-camera";

export type IdReviewProps = {
  capturedData?: CapturedImage;
  onRetake: () => void;
};

export const IdReview = ({ capturedData, onRetake }: IdReviewProps) => {
  return (
    <div className="flex h-full w-[500px] max-w-full flex-col justify-center p-6">
      Image Captured. Please click on Retake
      <div className="h-72 w-full rounded-image border border-brand/25 bg-brand/5">
        {capturedData && (
          <img
            className="object-contain"
            style={{
              height: "500px",
              width: "1000px",
            }}
            src={capturedData.url}
          />
        )}
      </div>
      <button type="button" onClick={onRetake}>
        Retake
      </button>
    </div>
  );
};
