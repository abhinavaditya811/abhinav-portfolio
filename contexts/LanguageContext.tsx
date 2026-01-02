'use client';

import { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const language = 'en' as const;

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * UI Translations (English only)
 * 
 * These are the essential UI strings used throughout the site.
 * Personal content is configured in the /config folder.
 */
const translations: Record<string, string> = {
  // Navigation
  'blog.back': 'back',
  'nav.home': 'Home',
  'nav.blogs': 'Writing',
  
  // Blog page UI elements
  'blog.git.title': 'git commands',
  'blog.git.date': 'Git Commands Reference',
  'blog.git.intro': 'A collection of useful git commands for reference.',
  'blog.git.mentalModelTitle': 'mental model',
  'blog.git.mentalModelText': 'git is a distributed version control system (local). github is a hosting platform (online). most of us memorize commands without understanding the graph model underneath.',
  'blog.git.coreConceptsTitle': 'core concepts',
  'blog.git.coreConcepts.snapshotsTitle': 'snapshots, not diffs',
  'blog.git.coreConcepts.snapshotsText': "git stores a full snapshot of your project with every commit, not just the differences. if a file hasn't changed, it stores a pointer to the previous version.",
  'blog.git.coreConcepts.threeTreesTitle': 'the three trees',
  'blog.git.coreConcepts.threeTrees.working': 'files you see/edit.',
  'blog.git.coreConcepts.threeTrees.staging': 'changes ready for commit.',
  'blog.git.coreConcepts.threeTrees.head': 'pointer to the last commit.',
  
  // Git commands sections
  'blog.git.setupTitle': 'setup & config',
  'blog.git.setup.configUserName': 'set your username for commits.',
  'blog.git.setup.configUserEmail': 'set your email for commits.',
  'blog.git.setup.configColor': 'enable helpful color output.',
  'blog.git.setup.configList': 'show all configuration settings.',
  'blog.git.setup.alias': "create a shortcut: type 'git co' instead of 'git checkout'.",
  'blog.git.setup.editor': 'set vs code as default editor for commit messages.',
  'blog.git.gettingTitle': 'getting & creating projects',
  'blog.git.getting.init': 'initialize a new repo in current directory.',
  'blog.git.getting.clone': 'download a repo and its entire history.',
  'blog.git.getting.cloneDepth': 'shallow clone (latest snapshot only, faster).',
  'blog.git.basicTitle': 'basic snapshotting',
  'blog.git.basic.amendNoEdit': 'add staged changes to last commit without changing message.',
  'blog.git.basic.status': 'show modified, staged, and untracked files.',
  'blog.git.basic.addFile': 'stage a specific file for the next commit.',
  'blog.git.basic.addAll': 'stage all changes in current directory.',
  'blog.git.basic.addPatch': 'interactively choose chunks of code to stage.',
  'blog.git.basic.commitMsg': 'save staged changes as a new snapshot.',
  'blog.git.basic.commitAm': 'stage tracked files and commit in one step.',
  'blog.git.basic.rm': 'remove a file from working tree and index.',
  'blog.git.basic.mv': 'move or rename a file.',
  'blog.git.branchingTitle': 'branching & merging',
  'blog.git.branching.switchDash': 'quickly switch back to the previous branch.',
  'blog.git.branching.merged': 'list branches already merged into current.',
  'blog.git.branching.mergeBase': 'find the common ancestor of two branches.',
  'blog.git.branching.branch': 'list all local branches.',
  'blog.git.branching.branchName': 'create a new branch (pointer).',
  'blog.git.branching.branchD': 'delete a merged branch safely.',
  'blog.git.branching.branchDForce': 'force delete a branch (even if unmerged).',
  'blog.git.branching.switchName': 'switch to a branch.',
  'blog.git.branching.switchC': 'create and switch to a new branch.',
  'blog.git.branching.merge': 'combine history of another branch into current.',
  'blog.git.branching.mergeAbort': 'cancel a merge in progress and return to pre-merge state.',
  'blog.git.branching.tag': 'mark the current commit with a tag.',
  'blog.git.branching.tagA': 'create an annotated tag with metadata.',
  'blog.git.sharingTitle': 'sharing & updating',
  'blog.git.sharing.remoteRename': 'rename a remote connection.',
  'blog.git.sharing.pushDelete': 'delete a remote branch.',
  'blog.git.sharing.remoteV': 'list all remote repositories.',
  'blog.git.sharing.remoteAdd': 'connect local repo to a remote one.',
  'blog.git.sharing.remoteSetUrl': 'change the url of an existing remote.',
  'blog.git.sharing.fetch': "download changes from remote but don't merge.",
  'blog.git.sharing.fetchPrune': 'delete local refs to remote branches that were deleted.',
  'blog.git.sharing.pull': 'fetch + merge (update current branch).',
  'blog.git.sharing.push': 'upload local commits to remote.',
  'blog.git.sharing.pushU': 'push and set upstream tracking.',
  'blog.git.sharing.pushForceLease': 'safer force push; fails if someone else pushed.',
  'blog.git.sharing.pushTags': 'push all local tags to remote.',
  'blog.git.inspectionTitle': 'inspection & comparison',
  'blog.git.inspection.logS': 'search history for the first occurrence of a string.',
  'blog.git.inspection.logAuthor': 'filter commit history by author.',
  'blog.git.inspection.logSince': 'show commits from a specific timeframe.',
  'blog.git.inspection.log': 'show commit history.',
  'blog.git.inspection.logOneline': 'visualize commit history graph compactly.',
  'blog.git.inspection.shortlog': 'show summary of commits by author.',
  'blog.git.inspection.diff': 'show unstaged changes.',
  'blog.git.inspection.diffStaged': 'show staged changes (what will be committed).',
  'blog.git.inspection.diffWord': 'highlight changed words instead of whole lines.',
  'blog.git.inspection.show': 'show changes and metadata for a specific commit.',
  'blog.git.inspection.blame': 'show who modified each line of a file.',
  'blog.git.inspection.blameL': 'blame only lines 10 through 20.',
  'blog.git.inspection.grep': 'search for text inside tracked files.',
  'blog.git.undoTitle': 'undo & fix',
  'blog.git.undo.checkoutHash': 'restore a file to a specific past version.',
  'blog.git.undo.updateRef': 'effectively "un-initialize" the first commit of a repo.',
  'blog.git.undo.resetSoft': 'undo last commit but keep changes staged.',
  'blog.git.undo.resetHard': 'undo last commit and discard all changes (dangerous).',
  'blog.git.undo.revert': 'create new commit that reverses a previous one.',
  'blog.git.undo.restore': 'discard local changes in a file.',
  'blog.git.undo.restoreStaged': 'unstage a file (keep changes in working directory).',
  'blog.git.undo.commitAmend': 'add staged changes to previous commit / edit message.',
  'blog.git.advancedTitle': 'advanced & power tools',
  'blog.git.advanced.rebaseI': 'interactively rewrite history: squash, fixup, reorder, or drop.',
  'blog.git.advanced.rebase': 'reapply commits on top of another base tip.',
  'blog.git.advanced.stash': 'temporarily shelve dirty changes.',
  'blog.git.advanced.stashPop': 'reapply stashed changes and remove from stash list.',
  'blog.git.advanced.stashList': 'list all stashed changesets.',
  'blog.git.advanced.stashU': 'stash including untracked files.',
  'blog.git.advanced.bisectStart': 'start binary search to find the commit that introduced a bug.',
  'blog.git.advanced.cherryPick': 'apply the changes from a specific commit.',
  'blog.git.advanced.reflog': 'show a log of all reference movements (recover lost commits).',
  'blog.git.advanced.worktreeAdd': 'checkout multiple branches in parallel folders.',
  'blog.git.advanced.submodule': 'fetch and update submodule dependencies.',
  'blog.git.advanced.rerere': 'reuse recorded resolution of conflicted merges.',
  'blog.git.adminTitle': 'administration',
  'blog.git.admin.clean': 'remove all untracked files and directories.',
  'blog.git.admin.gc': 'cleanup unnecessary files and optimize local repo.',
  'blog.git.admin.checkIgnore': 'debug why a file is being ignored.',
  'blog.git.admin.archive': 'export the current branch to a zip file.',
  'blog.git.admin.revParse': 'output the full SHA-1 hash of the current commit.',
  'blog.git.referencesTitle': 'references',
  'blog.git.references.docs': 'official git docs',
  'blog.git.references.dangit': 'dangit, git!',

  // Coding blog
  'blog.coding.title': 'how i learned to code',
  'blog.coding.date': 'My Coding Journey',
  'blog.coding.intro': 'Small learnings that taught me to code from start (top) to end (bottom)',
  'blog.coding.note': 'note: this list is continuously updated',
  'blog.coding.referencesTitle': 'references',

  // Ontology blog
  'blog.ontology.title': 'why ontology for text-to-sql?',
  'blog.ontology.date': 'Understanding Ontology in Text-to-SQL',
  'blog.ontology.whatIsTitle': 'what is an ontology?',
  'blog.ontology.whatIsP1': 'An ontology formally defines data concepts and their relationships, enabling more accurate text-to-SQL query generation.',
  'blog.ontology.whatIsP2': 'The definition: a set of concepts and categories in a subject area or domain that shows their properties and the relations between them.',
  'blog.ontology.mapAlt': 'A map showing how concepts connect in an ontology',
  'blog.ontology.whatIsP3': 'An ontology consists of entities, attributes, relationships, metrics and business rules.',
  'blog.ontology.simpleExampleTitle': 'a simple example',
  'blog.ontology.simpleExampleP1': 'Consider customers as an entity with attributes like name and email, relationships to orders, and metrics like total spend.',
  'blog.ontology.whyMatterTitle': 'why ontologies matter for text-to-sql',
  'blog.ontology.whyMatterP1': 'Ontologies help text-to-SQL systems understand business context and generate accurate queries.',
  'blog.ontology.whyMatterP2': 'They abstract complexity by defining business entities, relationships, and metrics centrally.',
  'blog.ontology.whyMatterLi1': 'which tables to join',
  'blog.ontology.whyMatterLi2': 'what filters to apply',
  'blog.ontology.whyMatterLi3': 'how to calculate the metric correctly',
  'blog.ontology.whyMatterLi4': 'what the proper grain of analysis should be',
  'blog.ontology.graphsAlt': 'Graphs showing ontology vs non-ontology sql queries',
  'blog.ontology.whyMatterP3': 'This enables consistency, faster queries, and lower barriers to entry.',
  'blog.ontology.whyMatterP4': 'Ontologies can also improve performance through optimization knowledge.',
  'blog.ontology.buildingTitle': 'building an ontology from scratch',
  'blog.ontology.buildingP1': 'Start with core entities your business needs.',
  'blog.ontology.addingObjectsAlt': 'Creating an object or link in ontology',
  'blog.ontology.buildingP2': 'Begin with 3-5 critical entities and define them thoroughly.',
  'blog.ontology.buildingP3': 'Choose stable identifiers as primary keys.',
  'blog.ontology.buildingP4': 'Focus on relationships that represent real business flows.',
  'blog.ontology.buildingP5': 'Add the metrics people ask about daily.',
  'blog.ontology.buildingP6': 'Prove value quickly to maintain organizational buy-in.',
  'blog.ontology.attrsAlt': 'Creating attributes and editing object properties',
  'blog.ontology.goodEnoughTitle': 'when is an ontology "good enough"?',
  'blog.ontology.goodEnoughP1': 'An ontology is never complete. Aim for 80% coverage of common cases.',
  'blog.ontology.goodEnoughP2': 'You know it\'s good enough when:',
  'blog.ontology.goodEnoughLi1': 'new analysts can answer common questions without help',
  'blog.ontology.goodEnoughLi2': 'metrics are consistent across reports',
  'blog.ontology.goodEnoughLi3': 'people check the ontology before writing custom queries',
  'blog.ontology.goodEnoughLi4': 'you spend more time using it than building it',
  'blog.ontology.howEnginesTitle': 'how text-to-sql engines use ontologies',
  'blog.ontology.howEnginesP1': 'The engine identifies entities and metrics from your question.',
  'blog.ontology.howEnginesP2': 'It looks up metric definitions in the ontology.',
  'blog.ontology.howEnginesP3': 'It determines necessary joins from defined relationships.',
  'blog.ontology.howEnginesP4': 'It applies business rules automatically.',
  'blog.ontology.howEnginesP5': 'The result is accurate SQL generated in seconds.',
  'blog.ontology.chatAlt': 'Querying with text-to-SQL',
  'blog.ontology.ambiguityTitle': 'handling ambiguity',
  'blog.ontology.ambiguityP1': 'Ontologies help resolve ambiguous terms by checking context and asking for clarification.',
  'blog.ontology.ambiguityP2': 'They also handle synonyms by mapping different terms to the same entity.',
  'blog.ontology.vsOtherTitle': 'ontologies vs other approaches',
  'blog.ontology.vsOther.dbtTitle': 'dbt models:',
  'blog.ontology.vsOther.dbtText': 'dbt transforms data; ontologies define meaning. Use both together.',
  'blog.ontology.vsOther.biTitle': 'bi semantic layers:',
  'blog.ontology.vsOther.biText': 'BI semantic layers are tool-specific. Ontologies are tool-agnostic.',
  'blog.ontology.vsOther.viewsTitle': 'views and stored procedures:',
  'blog.ontology.vsOther.viewsText': 'Views lack discoverability and natural language support that ontologies provide.',
  'blog.ontology.sourcesAlt': 'Comparing ontologies vs other methods',
  'blog.ontology.futureTitle': 'the future for ontologies',
  'blog.ontology.futureP1': 'LLMs need ontologies to understand business-specific logic.',
  'blog.ontology.futureP2': 'Ontologies can evolve based on usage patterns.',
  'blog.ontology.futureP3': 'As data complexity grows, ontologies become essential.',
  'blog.ontology.referencesTitle': 'references',
  'blog.ontology.references.builtin': 'builtin.com/data-science/ontology',
  'blog.ontology.references.palantir': 'blog.palantir.com - ontology finding meaning in data',
  'blog.ontology.references.palantirDocs': 'palantir.com/docs/foundry/ontology/overview',
  'blog.ontology.references.textql': 'docs.textql.com - ontology overview',
  'blog.ontology.note': 'note: images from original sources',
};
