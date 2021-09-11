# GIT

* Initially git load the file in repository but later it does not add file again and again, rather it just track the changes made in the file  
 
* detached head -> if we we checkout one commit, it is possible that this commit is in multiple branches, therefore in this case if we check the current branch it will show us that we are not in any branch but in detached head. Any changes sone in this branch will not be saved in any our branches, we need to create new branch to save the changes  

* reflog -> store data for last 30 days. can use checkout or reset to go back to any changes
### gitignore

*.log ->  ignore all .log file   
!test.log -> include test.log  
/web-app/* -> ignore web-app folder  

### Merge types

* Fast-forward merge -> git merge <featureBranch> (run it from master) 
	* Use in case where once feature branch is created, no changes in master is done  
	* git merge --squash <feature branch name> -> copy changes to master, but we need to commit.  
* Non Fast-forward merge -> additional commit in both master and feature after feat was created.  
	* recursive ->  git merge --no-ff <feature bransch name>
		* if feature had two commits f1 and f2, now master will have 3 more commits f1,f2 and merge.
		* to go back we just need to go back 1 step (merge commit)->git reset --hard HEAD~1
		* if master has changes after creatoin of feature, merge will automatically do recursive
	* octopus
	* Ours
	* Subtree


|command										| Description   									|
| ---											| ---												|
|git -init										|initialiize git									|
|git config --global user.email <email>			| add user email who is committing					|
|git config --global user.name <name>			| add user name who is committing					|
| ---											| ---												|
|git add <file>									| add file to staging/tracking						|
|git rm <file>									| delete file from tracking							|
|git ls-files									| list files in our staging area					|
|git rm --cached <file>							| Unstage file										|
|git restore --staged <file>					| Unstage file										|
|git commit -m"message"							| Commit project in local repository				|
| ---											| ---												|
|git log										| give records of all commit in current branch		|
|git checkout <commit id from log>				| checkout the earlier code							|
|git switch -c <new Branch Name>				| create and switch new branch from current checkout|
|git switch -									||										
|git checkout master							| exit out from current checkout and back to master	| 
| ---											| ---												|
|git branch <branch >							| create new branch in local copy of current branch	|
|git branch										| list all the branch in local						|
|git checkout <branchName>						| Switch branch										|
|git checkout -b <branch name>					| create and switch to new branch					|
|git merge <featureBranch> (run it from master) | merge the current branch from feature branch		|
| ---											| ---												|
|git restore <file name> 						| delete changes & restore unstaged file			|
|git checkout -- <fileName>						| same as git restore (-- refers to current branch)	|
|git clean -dn									| list new untracked file							|
|git clean -df									| delete new untracked file							|
|git restore --staged <file>					| Unstage file										|
|git reset <filename>							| restore file from branch in stage area(sameAsAbove|
|git checkout <filename>						| to undo the chnages in file						|
|git reset --soft HEAD~1						| undo last commit,file will still be in tracking	|
|git reset HEAD~1								| Above+remove file not in HEAD from tracking		|
|git reset --hard HEAD~1						| Above +remove file not in HEAD from workspace also|
|git branch -D <branch Name1 branchName2>		| Delete branch from local							|
|git branch -d <branchName>						| can only delete those which are already merged	|
| ---											| ---												|
|git stash										| save your uncommited unstaged changes in memory	|
|git stash apply								| access stash changes								|
|git stash list									| get list of all stashes							|
|git stash apply <index>						| access stash from list							|
|git stash push -m"msg"							| stash it with a message							|
|git stash pop <index>							| pop the changes from stash to branch				|
|git stash drop <index>							| drop the stash									|
|git stash clear								| delete all stashes								|
| ---											| ---												|
|git reflog										| give logs of all the activity in repository		|
|git reset --hard <hashfrom reflog> 			| HEAD change back to selected hash					|
|git checkout <hash from reflog>				| We are in detached-mode, create branch from here	|
| --- 											| --- 												|
|git merge <featureBranch>						| merge from feat to master with all commit in feat	|
|git merge --squash <featureBranch>				| copy all changes to master,without any feat commit|
|git merge --no-ff <feature bransch name>		| recursive merge.Check [link](#Merge-types)		|
|||
|||
|||
|||
|||
|||
|||
|||
|||
||| 























