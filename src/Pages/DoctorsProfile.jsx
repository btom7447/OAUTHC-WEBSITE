import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDoctors } from '../Components/DepartmentProvider';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import DoctorsCaption from '../Components/DoctorsCaption';

const DoctorsProfile = () => {
  const { doctorName } = useParams();
  const doctorsData = useDoctors();

  // Decode the doctorName from the URL
  const decodedDoctorName = decodeURIComponent(doctorName);

  // Find the doctor based on the name from the URL
  const doctor = doctorsData.find(dep => {
    const formattedName = dep.doctorName.replace(/\s+/g, '-').toLowerCase();
    return formattedName === decodedDoctorName.replace(/\s+/g, '-').toLowerCase();
  });

  if (!doctor) { 
    return <div className='loading'>Loading ....</div>;
  }

  return (
    <div className='doctor-profile'>
      <DoctorsCaption />
      <div className="doctor-details">
        <div className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
          <Link to="/about/find-doctor">Back</Link>
        </div>
        <div className="doctor-overview-container">
          <div className="doctor-poster">
            <img src={doctor.doctorImage} alt={doctor.doctorName} />
            <div className="socials-link">
              {/* LINKEDIN */}
              <a href={doctor.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${doctor.doctorName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path d="M20 0C8.95417 0 0 8.97143 0 20.0386C0 31.1057 8.95417 40.0771 20 40.0771C31.0458 40.0771 40 31.1057 40 20.0386C40 8.97143 31.0458 0 20 0ZM15.1042 28.3441H11.0542V15.2857H15.1042V28.3441ZM13.0542 13.6826C11.775 13.6826 10.9479 12.7746 10.9479 11.6516C10.9479 10.5056 11.8 9.62477 13.1062 9.62477C14.4125 9.62477 15.2125 10.5056 15.2375 11.6516C15.2375 12.7746 14.4125 13.6826 13.0542 13.6826ZM29.8958 28.3441H25.8458V21.1073C25.8458 19.4228 25.2583 18.2789 23.7938 18.2789C22.675 18.2789 22.0104 19.0533 21.7167 19.7985C21.6083 20.0636 21.5813 20.4393 21.5813 20.813V28.342H17.5292V19.4499C17.5292 17.8197 17.4771 16.4567 17.4229 15.2836H20.9417L21.1271 17.0975H21.2083C21.7417 16.2458 23.0479 14.9893 25.2333 14.9893C27.8979 14.9893 29.8958 16.7781 29.8958 20.623V28.3441Z" fill="#005046"/>
                </svg>
              </a>
              {/* FACEBOOK */}
              <a href={doctor.facebook} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${doctor.doctorName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path d="M20 0C8.95417 0 0 8.97143 0 20.0386C0 31.1057 8.95417 40.0771 20 40.0771C31.0458 40.0771 40 31.1057 40 20.0386C40 8.97143 31.0458 0 20 0ZM24.7375 13.8475H21.7313C21.375 13.8475 20.9792 14.3171 20.9792 14.9412V17.1163H24.7396L24.1708 20.2181H20.9792V29.5297H17.4312V20.2181H14.2125V17.1163H17.4312V15.2919C17.4312 12.6744 19.2438 10.5474 21.7313 10.5474H24.7375V13.8475Z" fill="#005046"/>
                </svg>
              </a>
              {/* INSTAGRAM */}
              <a href={doctor.instagram} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${doctor.doctorName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path d="M28.1208 13.883C27.9473 13.4326 27.6815 13.0237 27.3406 12.6825C26.9998 12.3413 26.5913 12.0755 26.1417 11.9021C25.5225 11.6723 24.8686 11.5509 24.2083 11.543C23.1104 11.4929 22.7813 11.4804 20 11.4804C17.2188 11.4804 16.8896 11.4929 15.7917 11.543C15.1308 11.5506 14.4761 11.6721 13.8563 11.9021C13.4068 12.0759 12.9986 12.3422 12.6581 12.6838C12.3176 13.0253 12.0522 13.4345 11.8792 13.885C11.6499 14.5054 11.5286 15.1606 11.5208 15.8221C11.4708 16.9221 11.4583 17.2519 11.4583 20.0385C11.4583 22.8252 11.4708 23.155 11.5208 24.255C11.5284 24.9172 11.6496 25.5731 11.8792 26.1941C12.0527 26.6445 12.3185 27.0534 12.6594 27.3946C13.0002 27.7358 13.4087 28.0016 13.8583 28.175C14.4775 28.4048 15.1315 28.5262 15.7917 28.5341C16.8896 28.5842 17.2188 28.5946 20 28.5946C22.7813 28.5946 23.1104 28.5842 24.2083 28.532C24.8691 28.5251 25.5238 28.4043 26.1438 28.175C26.5932 28.0012 27.0014 27.7349 27.3419 27.3933C27.6824 27.0518 27.9478 26.6426 28.1208 26.1921C28.3502 25.5717 28.4714 24.9165 28.4792 24.255C28.5292 23.155 28.5396 22.8252 28.5396 20.0385C28.5396 17.2519 28.5292 16.9221 28.4771 15.8221C28.4702 15.16 28.3497 14.5041 28.1208 13.883ZM20 25.3989C18.9419 25.3989 17.9075 25.0845 17.0277 24.4955C16.1479 23.9065 15.4622 23.0693 15.0573 22.0898C14.6523 21.1104 14.5464 20.0326 14.7528 18.9928C14.9592 17.953 15.4688 16.9979 16.217 16.2482C16.9652 15.4986 17.9185 14.9881 18.9563 14.7812C19.9941 14.5744 21.0698 14.6806 22.0474 15.0863C23.0249 15.492 23.8605 16.179 24.4484 17.0605C25.0362 17.942 25.35 18.9784 25.35 20.0385C25.35 21.4602 24.7863 22.8236 23.783 23.8289C22.7797 24.8341 21.4189 25.3989 20 25.3989ZM25.5604 15.7198C25.3132 15.7198 25.0715 15.6464 24.866 15.5088C24.6604 15.3711 24.5002 15.1755 24.4056 14.9467C24.311 14.7178 24.2862 14.466 24.3344 14.2231C24.3827 13.9801 24.5017 13.757 24.6765 13.5818C24.8514 13.4067 25.0741 13.2874 25.3166 13.2391C25.559 13.1907 25.8104 13.2155 26.0388 13.3103C26.2672 13.4051 26.4624 13.5657 26.5998 13.7716C26.7371 13.9776 26.8104 14.2197 26.8104 14.4674C26.8104 14.7996 26.6787 15.1181 26.4443 15.353C26.2099 15.5879 25.8919 15.7198 25.5604 15.7198ZM23.4729 20.0385C23.4729 20.7267 23.2692 21.3995 22.8876 21.9717C22.506 22.5439 21.9636 22.9899 21.329 23.2533C20.6944 23.5167 19.9962 23.5856 19.3225 23.4513C18.6488 23.317 18.03 22.9856 17.5443 22.499C17.0586 22.0124 16.7278 21.3924 16.5938 20.7174C16.4598 20.0424 16.5286 19.3428 16.7914 18.707C17.0543 18.0711 17.4994 17.5277 18.0706 17.1454C18.6417 16.763 19.3131 16.5589 20 16.5589C20.9211 16.5589 21.8044 16.9255 22.4557 17.5781C23.107 18.2306 23.4729 19.1157 23.4729 20.0385ZM20 0C16.0444 0 12.1776 1.17524 8.8886 3.3771C5.59962 5.57897 3.03617 8.70856 1.52242 12.3701C0.00866564 16.0317 -0.387401 20.0608 0.384303 23.9479C1.15601 27.835 3.06082 31.4055 5.85787 34.2079C8.65492 37.0104 12.2186 38.9189 16.0982 39.6921C19.9778 40.4653 23.9991 40.0684 27.6537 38.5518C31.3082 37.0351 34.4318 34.4667 36.6294 31.1714C38.827 27.876 40 24.0018 40 20.0385C40 14.724 37.8929 9.62711 34.1421 5.86915C30.3914 2.1112 25.3043 0 20 0V0ZM30.3542 24.3406C30.3365 25.2067 30.1724 26.0635 29.8688 26.8746C29.6012 27.5678 29.1921 28.1973 28.6676 28.7228C28.143 29.2483 27.5147 29.6583 26.8229 29.9263C26.014 30.2303 25.1596 30.3948 24.2958 30.4127C23.1833 30.4628 22.8292 30.4753 20 30.4753C17.1708 30.4753 16.8167 30.4628 15.7042 30.4127C14.8404 30.3948 13.986 30.2303 13.1771 29.9263C12.4853 29.6583 11.857 29.2483 11.3325 28.7228C10.8079 28.1973 10.3988 27.5678 10.1313 26.8746C9.82784 26.0642 9.66371 25.2081 9.64584 24.3427C9.59584 23.228 9.58334 22.8732 9.58334 20.0385C9.58334 17.2039 9.59584 16.8491 9.64584 15.7344C9.66305 14.8692 9.82647 14.0131 10.1292 13.2025C10.3967 12.5087 10.8061 11.8787 11.3309 11.3528C11.8558 10.8269 12.4847 10.4167 13.1771 10.1487C13.9861 9.8454 14.8406 9.68166 15.7042 9.66442C16.8167 9.61433 17.1708 9.6018 20 9.6018C22.8292 9.6018 23.1833 9.61433 24.2958 9.66442C25.1595 9.68166 26.0139 9.8454 26.8229 10.1487C27.515 10.417 28.1434 10.8272 28.6679 11.3531C29.1924 11.879 29.6014 12.5089 29.8688 13.2025C30.1722 14.0129 30.3363 14.869 30.3542 15.7344C30.4042 16.8491 30.4167 17.2039 30.4167 20.0385C30.4167 22.8732 30.4042 23.228 30.3542 24.3427V24.3406Z" fill="#005046"/>
                </svg>
              </a>
              {/* TWITTER */}
              <a href={doctor.twitter} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${doctor.doctorName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M11.0625 10.2267L25.6847 29.7733H28.9958L14.3736 10.2267H11.0625Z" fill="#005046"/>
                  <path d="M20 0C8.95422 0 0 8.95422 0 20C0 31.0458 8.95422 40 20 40C31.0458 40 40 31.0458 40 20C40 8.95422 31.0458 0 20 0ZM24.9031 31.3351L18.2462 22.4342L10.0071 31.3351H7.88933L17.3 21.1689L7.94844 8.66489H15.156L21.2867 16.8622L28.8742 8.66489H30.992L22.2329 18.128L32.1107 31.3351H24.9031Z" fill="#005046"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="doctor-overview">
            <h3>{doctor.doctorName}</h3>
            <h5>{Array.isArray(doctor.specialty) ? doctor.specialty.join(', ') : ''}</h5>
            <div className="doctor-icons-cont">
              {/* CLINIC DAYS */}
              <div className="doctor-icons">
                <p>{Array.isArray(doctor.clinicDay) ? doctor.clinicDay.join(', ') : ''}</p>
              </div>
            </div>
            <div className="doctor-icons-cont">
              {/* LOCATION */}
              <div className="doctor-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 23" fill="none">
                  <path d="M9 0.75C4.03736 0.75 0 4.74665 0 9.65924C0 11.6863 0.671065 13.5954 1.94068 15.18C3.58458 17.2318 8.3651 22.1035 8.56777 22.3099L8.99994 22.75L9.43217 22.31C9.63496 22.1035 14.4169 17.2307 16.0611 15.1782C17.3295 13.5948 18 11.6864 18 9.65924C18 4.74665 13.9626 0.75 9 0.75ZM15.1164 14.4367C13.7928 16.0889 10.2383 19.7643 9 21.0355C7.7618 19.7644 4.20856 16.09 2.8853 14.4384C1.78647 13.0668 1.20565 11.4143 1.20565 9.65924C1.20565 5.40474 4.70216 1.94349 9 1.94349C13.2978 1.94349 16.7943 5.40474 16.7943 9.65924C16.7943 11.4144 16.2141 13.0664 15.1164 14.4367Z" fill="black"/>
                  <path d="M9 4.75C6.24297 4.75 4 6.99297 4 9.75C4 12.507 6.24302 14.75 9 14.75C11.757 14.75 14 12.507 14 9.75C14 6.99302 11.757 4.75 9 4.75ZM9 13.6184C6.86691 13.6184 5.13155 11.883 5.13155 9.75C5.13155 7.61691 6.86696 5.88155 9 5.88155C11.133 5.88155 12.8684 7.61696 12.8684 9.75C12.8684 11.8831 11.1331 13.6184 9 13.6184Z" fill="black"/>
                </svg>
                <p>{doctor.unit}</p>
              </div>
              {/* QUALIFICATION */}
              <div className="doctor-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M12.0245 13.014C12.3845 13.038 12.7205 12.894 13.0805 12.774C14.9765 12.15 16.8725 11.526 18.7445 10.878C18.8645 10.83 18.9605 10.782 19.0565 10.71C19.1765 10.614 19.1765 10.494 19.0565 10.398C18.9605 10.326 18.8405 10.254 18.7205 10.23C16.7045 9.62997 14.6885 9.02997 12.6725 8.40597C12.2165 8.26197 11.7605 8.26197 11.2805 8.40597C9.28848 9.00597 7.27248 9.60597 5.28048 10.206C5.16048 10.254 5.04048 10.302 4.92048 10.374C4.77648 10.47 4.77648 10.614 4.92048 10.71C5.01648 10.782 5.11248 10.83 5.20848 10.854C7.20048 11.526 9.21649 12.198 11.2325 12.846C11.4965 12.966 11.7365 13.014 12.0245 13.014Z" fill="black"/>
                  <path d="M16.0091 13.11C16.2971 13.038 16.3691 13.23 16.3691 13.374C16.3691 14.142 16.3691 14.886 16.3691 15.654C16.3691 15.918 16.2731 16.086 16.1051 16.254C16.0331 16.326 15.9611 16.374 15.8891 16.422C15.4091 16.758 14.8571 16.974 14.2811 17.118C13.1531 17.43 12.0011 17.478 10.8491 17.334C10.1051 17.238 9.36114 17.046 8.66514 16.734C8.35314 16.59 8.06514 16.422 7.84914 16.182C7.70514 16.038 7.63314 15.894 7.65714 15.678C7.63314 14.958 7.63314 14.214 7.63314 13.47C7.63314 13.062 7.92114 13.11 8.04114 13.134C9.09714 13.494 10.1771 13.83 11.2331 14.19C11.7611 14.358 12.2651 14.358 12.7931 14.19L16.0091 13.11Z" fill="black"/>
                  <path d="M6.02464 12.414C6.12064 12.438 6.14464 12.486 6.14464 12.582C6.14464 13.254 6.14464 13.926 6.14464 14.598C6.14464 14.67 6.16864 14.742 6.19264 14.814C6.33664 15.174 6.50464 15.534 6.62464 15.894C6.74464 16.23 6.67264 16.566 6.43264 16.83C6.36064 16.926 6.26464 16.998 6.16864 17.07C6.07264 17.142 5.92864 17.19 5.80864 17.214C5.59264 17.238 5.42464 17.118 5.28064 16.998C5.20864 16.926 5.13664 16.854 5.06464 16.782C4.89664 16.566 4.84864 16.254 4.92064 15.966C5.01664 15.558 5.18464 15.198 5.37664 14.838C5.42464 14.766 5.44864 14.67 5.44864 14.598C5.44864 13.854 5.44864 13.134 5.44864 12.39C5.44864 12.246 5.56864 12.27 5.61664 12.294L6.02464 12.414Z" fill="black"/>
                </svg>
                <p>{Array.isArray(doctor.qualification) ? doctor.qualification.join(', ') : ''}</p>
              </div>
            </div>

            <h4>{doctor.overviewText}</h4>
            <p>{doctor.accomplishments}</p>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default DoctorsProfile;