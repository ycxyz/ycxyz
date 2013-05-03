to generat a clean branch of `book`,please execute following command:

    $ git branch -D clean-book      # remove clean-book branch
    $ git checkout -b clean-book    # create a clean branch and switch to it
    $ git cherry-pick book-cleaner-beg..book-cleaner-end    # cherry-pick range  of clean commits

since that, we have a clean branch of `book` named `clean-book`
