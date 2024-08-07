import { FaEye } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
    console.log(job);
    const { _id, job_title, posting_date, application_deadline, salary_range, applicants_number, job_description } = job;
    return (
        <div>
            <div className="card w-96 bg-[#2848ff0f] shadow">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{job_title}</h2>
                    </div>
                    <p className='text-end'>
                        By {"Abrarul Hoque"}
                    </p>
                    <p className="text-justify my-3">{job_description.slice(0, 100)}..</p>
                    <div className="text-start space-y-2">
                        <p>Posted On: {posting_date}</p>
                        <p>Application Deadline: {application_deadline}</p>
                        <p className="flex items-center"><FaPhoneVolume className="mr-2" /><a href="tel:01846112525">{"01846112525"}</a></p>
                        <small className="flex items-center">Applicant: {applicants_number}</small>

                        <p className="text-center"><span className="text-[#2847FF] font-bold">{salary_range}</span>/Month</p>
                    </div>

                    <div className="card-actions justify-between my-3">
                        <Link to={`/job/${_id}`}><button className="btn btn-primary bg-[#2847ff]">View Details</button></Link>
                        {/* <button className="btn btn-outline btn-primary">Apply Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;