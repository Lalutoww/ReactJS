import NoContent from './LoadingOverlaps/NoContent.jsx';
import NoUsers from './LoadingOverlaps/NoUsers.jsx';
import OnError from './LoadingOverlaps/OnError.jsx';
import Spinner from './LoadingOverlaps/Spinner.jsx';

const LoadingShade = () => {
   return (
      <div className="loading-shade">
         {/* <Spinner />
         <NoUsers />
         <NoContent />
         <OnError /> */}
      </div>
   );
};

export default LoadingShade;
