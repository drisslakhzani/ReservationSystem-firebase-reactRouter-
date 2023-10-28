import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faLocationDot, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function InformationSection() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">

      <h1 className="text-blue-400 text-2xl font-bold mb-4">Information</h1>
      <aside className="flex flex-col items-start text-lg  font-bold p-6 rounded-xl">
        <div className="py-3 flex  items-start">
          <FontAwesomeIcon className="text-blue-400 pr-3" icon={faLocationDot} />
          <span className='text-gray-700 leading-tight text-sm  '>01 Route de Nouadhibou, a cote du carrefour des dauphins, Nouakchott, Mauritanie</span>
        </div>

        <div className="py-2 flex items-">
          <span className='text-gray-700 leading-tight '>‫الحوتات‬ ‫كارفور‬ ‫قرب‬ ،‫نواذيبو‬ ‫طريق‬ 01 : ‫عنوان‬</span>
          <FontAwesomeIcon className="text-blue-400 pr-3" icon={faLocationDot} />
          </div>

        <div className="py-3 flex items-start">
          <FontAwesomeIcon className="text-blue-400 pr-3" icon={faEnvelopeSquare} />
          <span className='text-gray-700 leading-tight '>+222 49 86 86 24</span>
        </div>

        <div className="py-3 flex items-start">
          <FontAwesomeIcon className="text-blue-400 pr-3" icon={faPhoneSquare} />
          <a href='contact.cliniquedudiabete@gmail.com' className='text-gray-700 leading-tight '>contact.cliniquedudiabete@gmail.com</a>
        </div>

     
          
        
      </aside>
    </div>
  );
}

export default InformationSection;
