import React from "react";
import "./joblisting.css";
import { useState, useEffect } from "react";

export const JobListing = ({ jobData }) => {
  let allData = jobData.data;
  let role = jobData.role;
  let tech = jobData.technology;
  let exp = jobData.experience;

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setData(allData);
  }, [allData]);

  useEffect(() => {
    showFilterData();
  }, [filter]);

  function handleFilter(e) {
    const { name, value } = e.target;
    if (value === "reset") {
      let curFilter = { ...filter };
      delete curFilter[name];
      setFilter(curFilter);
      return;
    }
    setFilter({ ...filter, [name]: value });
  }

  function showFilterData() {
    let selFilters = Object.entries(filter);
    if (allData !== undefined) {
      if (selFilters.length !== 0) {
        let filteredData = allData;
        while (selFilters.length > 0) {
          let tempData = filteredData.filter((e) =>
            typeof e[selFilters[selFilters.length - 1][0]] === "object"
              ? e[selFilters[selFilters.length - 1][0]].includes(
                  selFilters[selFilters.length - 1][1]
                )
              : e[selFilters[selFilters.length - 1][0]] ===
                selFilters[selFilters.length - 1][1]
          );
          filteredData = tempData;
          selFilters.pop();
        }
        setData(filteredData);
      } else {
        setData(allData);
      }
    }
  }
  return (
    <div>
      <nav>
        <div className="jobRole__div">
          <label htmlFor="">JOB ROLE :</label>
          <select name="role" id="role-filter" onChange={handleFilter}>
            <option value="reset">Default</option>
            {role !== undefined
              ? role.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="techno__div">
          <label htmlFor="">TECHNOLOGY :</label>
          <select
            name="technology"
            id="technology-filter"
            onChange={handleFilter}
          >
            <option value="reset">Default</option>
            {tech !== undefined
              ? tech.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="experience__div">
          <label htmlFor="">EXPERIENCE :</label>
          <select
            name="experience"
            id="experience-filter"
            onChange={handleFilter}
          >
            <option value="reset">Default</option>
            {exp !== undefined
              ? exp.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))
              : null}
          </select>
        </div>
      </nav>
      <div className="job-list">
        {data !== undefined
          ? data.map((e) => (
              <div className={`job-list-${e.id}`} key={e.id} id="job-list-main">
                <div className="job-list-left">
                  <img src={e.logo} alt="img" />
                  <div className="job-list-left__right">
                    <h5>{e.company}</h5>
                    <p>{e.position}</p>
                    <p>{`${e.experience} | ${e.contract} | ${e.location}`}</p>
                  </div>
                </div>
                <div className="job-list-right">
                  <span>{e.role}</span>
                  {e.technology.map((e, i) => (
                    <span key={i}>{e}</span>
                  ))}
                  <span>{`${e.ctc}-LPA`}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
