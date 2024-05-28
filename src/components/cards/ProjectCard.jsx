const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-10">
      <div className="px-6 py-4">
        <div className="text-black-100 font-bold text-xl mb-2">
          {project.name}
        </div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="mb-2">
          <ul className="list-disc pl-5">
            {project.points.map((point, index) => (
              <li key={`project-point-${index}`} className="text-gray-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={`project-tag-${index}`}
              className="inline-block bg-[#9e2effd5] rounded-full px-3 py-1 text-sm font-semibold text-white-100 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
