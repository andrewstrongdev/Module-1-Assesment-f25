/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'git is a version control system that allows you to periodically push versions of your code into a cloud storage repository. This allows you to see how you rcode changed over time and go back to a previous version of your code if necessary (assuming you were consistantly pushing).';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const githubDefinition = 'GitHub is a coud storage platform where you can store periodic versions of your code.'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'git init primes your file to be able to work with git commands.'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitClone = 'git clone copys a repo to yur machine'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'git status gives you information about yur current directory'

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'git add adds any changes that have been made into the Git staging area.'
const gitAddCode = 'git add .'
//console.log(gitAddCode)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/


//CODE HERE
const gitCommitDefinition = 'git commit takes a snapshot of the Git staging area'
const gitCommitCode = 'git commit -m "reasonable information about the commit" '
console.log(gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "git push sends the snapshot of the Git staging area to a repository that you presumbaly already linked to. Usually to a GitHub repository or another cloud service"