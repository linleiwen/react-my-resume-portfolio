import dbsTitanic from "./dbsTitanic.png";
import pyOdata from "./pyOdata.png";
import dsPySpark from "./dsPySpark.png";
import personalPortfolio from "./personalPortfolio.png";
import PythonLib from "./pythonLib.png"; 
import afDag from "./afDag.png"

const myProjects = [
    { imgPath: pyOdata, 
      title: "Python OData Server",
      description: "A Python Flask service compliant with OData, showcasing my passion and commitment to data transparency and accessibility.",
      ghLink: "https://github.com/linleiwen/flask-odata-server"
    },
    { imgPath: afDag, 
      title: "Airflow Configs & DAGs for Kubernetes",
      description: "Airflow configurations and DAGs for Kubernetes-based Spark pipelines, scaled with Spark master and secured with Keycloak.",
      ghLink: "https://github.com/linleiwen/airflow_dag_demo_project"
    },
    { imgPath: dbsTitanic, 
      title: "Databricks Titanic dataset analytcis",
      description: "A tutorial on data science basics using PySpark, MLflow, and the Titanic dataset on Databricks.",
      ghLink: "https://github.com/linleiwen/titanic_dataset_databricks"
    },
    { imgPath: dsPySpark, 
      title: "Data Streaming with PySpark",
      description: "A code-based tutorial on production-level data streaming using PySpark, Confluent Kafka, Apache Drill, Docker, and Cassandra (NoSQL) for storage.",
      ghLink: "https://github.com/linleiwen/data_streaming_pyspark"
    },
    { imgPath: personalPortfolio, 
      title: "Personal Portfolio",
      description: "Portfolio and resume site showcasing projects, built with React and hosted on AWS s3 and route 53.",
      ghLink: "https://github.com/linleiwen/react-my-resume-portfolio"
    },
    { imgPath: PythonLib, 
      title: "Python Library",
      description: "A collections of useful python functions created by Max Lin. Feel Free to clone and fork this repository.",
      ghLink: "https://github.com/linleiwen/Max-useful-tools"
    },
  ];

  export default myProjects;