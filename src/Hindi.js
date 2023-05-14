import './Hindi.css';
import HindiFeatures from './HindiComponents/HindiFeatures/HindiFeatures';
import HindiFooter from './HindiComponents/HindiFooter/HindiFooter';
import HindiHeader from './HindiComponents/HindiHeader/HindiHeader';
import HindiQuestion from './HindiComponents/HindiQuestions/HindiQuestion';




function Hindi() {
  return (
    <>
    <HindiHeader/>
    <HindiFeatures/>
    <HindiQuestion/>
    <HindiFooter/>
    </>
  );
}

export default Hindi;
