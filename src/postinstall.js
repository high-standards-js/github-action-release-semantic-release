const base = require('@high-standards-js/base');
const release = require('@high-standards-js/github-action-release');

(async() => {
    await base.checkAcceptedHighStandards();

    let workflowObject = release.getWorkflowFileObject('release');
    workflowObject = release.addStep(
        workflowObject, 
        'release',
        'Release with semantic release', 
        1000.0,
        {
            run: 'npx semantic-release',
            env: {
                GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
                NPM_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
            }
        }
    );
    release.saveWorkflowFileObject(workflowObject, 'release');
})();