angular-pipeline
================

Surefire Pipeline view refactor

Take-home assignment for Top of Mind - Refactor of the Surefire Pipeline view.

I split this into two views - client list view and client detail view. My rationale for doing so was that there was just too much information presented in the existing view. I felt that it wasn't necessary to present the status of each step for every client at once. Instead, the list view contains data indicating the number of steps complete for each client, plus a status label indicating whether they are on schedule for closing or if they need immediate attention. The client view contains a step by step breakdown in list form, plus relevant client data. I also moved the archive and delete buttons to this view.

Yeoman was used for bootstrapping/scaffolding, Bower for package management, and I ran a Grunt task to build and serve locally.

I used Angular JS 1.2.6 and Bootstrap 3.
