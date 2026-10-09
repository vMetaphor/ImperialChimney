import { notFound } from "next/navigation";
import ProjectSpotlightPage from "../../../components/ProjectSpotlightPage";
import { getProjectBySlug, getProjectPath, projectPosts } from "../../../lib/projects";

export function generateStaticParams() {
  return projectPosts.map((project) => ({
    projectSlug: project.slug
  }));
}

export async function generateMetadata({ params }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.metaDescription,
    keywords: project.keywords,
    alternates: {
      canonical: getProjectPath(project)
    },
    openGraph: {
      title: project.title,
      description: project.metaDescription,
      url: getProjectPath(project),
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.metaDescription,
      images: [project.heroImage.src]
    }
  };
}

export default async function ProjectPage({ params }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  return <ProjectSpotlightPage project={project} />;
}
