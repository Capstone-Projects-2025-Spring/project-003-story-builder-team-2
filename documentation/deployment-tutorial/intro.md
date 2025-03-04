---
title: Docusaurus Deployment Tutorial
sidebar_position: 1
---

### For the team:

1. **First make sure you have an SSH key connected to your GitHub.**

- check @: https://github.com/settings/keys

    *If you do not have an SSH key yet...* 
    
    a. In a GitBash terminal:

        ```jsx
        [On Windows & Mac] ssh-keygen -t rsa -b 4096 -C "your-github-email@email.com"
        ```
    - Press Enter to accept the default file location (~/.ssh/id_rsa)
    - The key file is saved in this location if you don't change it: ~/.ssh/id_rsa.pub
    - Set a passcode/passphase if you wish (I didn't want one)

        Next, in the same terminal:

        ```jsx
        [On Windows & Mac] cat ~/.ssh/id_rsa.pub
        ```

    - Copy the entire output it gives --> go to https://github.com/settings/keys again.

    b. Click on ***New SSH key*** and then paste in the key into the ***Key*** box and give it a title.

    c. Then, add your **SSH key** to your **SSH Agent**

        ```jsx
        [On Windows] eval $(ssh-agent -s)
                     ssh-add ~/.ssh/id_rsa

        [On Mac] eval "$(ssh-agent -s)"
                 ssh-add -K ~/.ssh/id_rsa
        ```
    
    d. Test that your SSH connection is working properly...

        ```jsx
        [On Windows & Mac] ssh -T git@github.com
        ```

        - The output from it should be: <br></br>

            ```jsx
            [On Windows & Mac] Hi _____your-username_____! You have sucessfully authenticated, but GitHub does not provide shell access.
            ```
2. **Make sure the remote URL is set to the correct one:**

    a. First, check the current remote URL:

    ```jsx
    [On Windows & Mac] git remote -v
    ```
    
    b. Make sure it is the valid id to our repo, otherwise use this:

    ```jsx
    [On Windows & Mac] git remote set-url origin git@github.com:Capstone-Projects-2025-Spring/project-003-story-builder-team-2.git
    ```

    c. Verify with: <br></br>

    ```jsx
    [On Windows & Mac] git remote -v
    ```

    - Which should show: <br></br>

        ```jsx
        [On Windows & Mac] origin  git@github.com:Capstone-Projects-2025-Spring/project-003-story-builder-team-2.git (fetch)
                        origin  git@github.com:Capstone-Projects-2025-Spring/project-003-story-builder-team-2.git (push)
        ```

    If that is true, then you should be able to ssh into the organization (our github repo) and be able to commit, push, deploy, etc. yk

2. **How to setup Yarn to deploy the Docusaurus Page changes:**    

    a. In your VSCode terminal:

    - Obviously go to the project directory. Then go to the documentation section: <br></br><br></br>

    ```jsx
    [On Windows & Mac] cd documentation
    ```

    b. Assuming you have Node.js installed, you need to download Yarn first. Do this while still in the documentation location. This only has to be run once in the very beginning.

    ```jsx
    [On Windows & Mac] npm install --global yarn
    ```

    *Now Yarn should be installed!* <br></br>

    c. Use the following command to install the project-specific dependencies listen in our package.json file. Do this while still in the documentation location. This only has to be run once in the very beginning. <br></br>

    ```jsx
    [On Windows & Mac] yarn install
    ```

    d. After yarn is installed, (and you have made changes to the docusaurus pages), run a local version of the pages to test it: <br></br>

    ```jsx
    [On Windows & Mac] yarn start
    ```

    - This should show you if you have any build faults, and how to fix them. It also should update live. Everytime you are in your VSCode terminal, you can CTRL + S (or whatever is the equivalent on Mac) to live-update and save the page. You can view the changes in real-time.

    e. You can also test the build without checking it visually by doing:

    ```jsx
    [On Windows & Mac] yarn build
    ```

    f. If you are satisfied with your changes, you can deploy them to the main page (the one we can all access through our GitHub repo):

    ## MAKE SURE YOU ARE ON THE MAIN BRANCH WHEN YOU TRY TO DEPLOY

    ```jsx
    [On Windows] $env:GIT_USER="tur97019"
                 $env:ORGANIZATION_NAME="Capstone-Projects-2025-Spring"
                 $env:PROJECT_NAME="project-003-story-builder-team-2"
                 $env:USE_SSH="true"
                 yarn deploy

    [On Mac] export GIT_USER="tur97019"
             export ORGANIZATION_NAME="Capstone-Projects-2025-Spring"
             export PROJECT_NAME="project-003-story-builder-team-2"
             export USE_SSH="true"
             yarn deploy
    ```

And then hopefully that works. We rate that 5 booms for sure.