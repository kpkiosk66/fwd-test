import { useSelector } from "react-redux";
import { quotationProduct } from "../../shared/types";

type RootState = {
  cost: quotationProduct;
};

const CostDisplay: React.FC = () => {
  const costData = useSelector((state: RootState) => state.cost);
  return (
    <div>
      ผลประโยชน์ที่ได้รับ
      <div>
        {costData.baseSumAssured > 0 ? "ทุนประกันชีวิต:" + costData.baseSumAssured + 'บาท' : null} 
      </div>
    </div>
  );
};

export { CostDisplay };
