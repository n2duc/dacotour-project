import TourContentWrap from './TourContentWrap'
import { Dot } from 'lucide-react';

const TourNote = ({ data }) => {
  const { noted, surcharge } = data[0];

  return (
    <TourContentWrap title="Note" id="note" className="scroll-mt-32" >
      <div className="flex flex-col gap-3">
        {noted.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <Dot size={24} className="flex-shrink-0 text-secondary" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </TourContentWrap>
  )
}

export default TourNote