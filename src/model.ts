export interface JobDetailInter {
    job_city: string;
    job_id: string;
    employer_logo: string;
    employer_name: string;
    job_country: string;
    job_title: string;
    job_min_salary: string;
    job_max_salary: string;
    job_apply_link: string;
    job_description: string;
    job_required_experience: {
      experience_mentioned: boolean;
      required_experience_in_months: number;
    };
    job_is_remote: boolean;
    job_employment_type: string;
  }