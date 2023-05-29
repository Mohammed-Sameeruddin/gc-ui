pipeline {
  agent any
  stages {
	  stage('build')
		  {
			  steps	{
	    sh 'npm i --legacy-peer-deps'
            sh 'npm run test'
				  }
       }
	}	
}

