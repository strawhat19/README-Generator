// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseArray = license.split(` `);
    let licenseName = licenseArray[0];
    // return `![License](https://img.shields.io/badge/License-${licenseName}-blue.svg)`;
    return `[![License Badge: ${licenseName}](https://img.shields.io/badge/License-${licenseName}-blue.svg)](${renderLicenseLink(licenseName)})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
    let licenseArray = license.split(` `);
    let licenseName = licenseArray[0];
    switch(licenseName) {
        case `MIT`:
        return licenseLink = `https://opensource.org/licenses/${licenseName}`;
        case `BSD`:
        return licenseLink = `https://opensource.org/licenses/${licenseName}-3-Clause`;
        case `ISC`:
        return licenseLink = `https://opensource.org/licenses/${licenseName}`;
        case `GNU`:
        return licenseLink = `https://opensource.org/licenses/gpl-3.0`;
        case `APACHE`:
        return licenseLink = `https://opensource.org/licenses/${licenseName}-2.0`;
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseText;
    let licenseArray = license.split(` `);
    let licenseName = licenseArray[0];
    switch(licenseName) {
        case `MIT`:
        return licenseText = `
        MIT License

        Copyright (C) 2012-2020 by various contributors (see AUTHORS)

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        
        Copyright 1998 by the Massachusetts Institute of Technology.

        Permission to use, copy, modify, and distribute this software and its
        documentation for any purpose and without fee is hereby granted, provided that
        the above copyright notice appear in all copies and that both that copyright
        notice and this permission notice appear in supporting documentation, and that
        the name of M.I.T. not be used in advertising or publicity pertaining to
        distribution of the software without specific, written prior permission.
        M.I.T. makes no representations about the suitability of this software for any
        purpose.  It is provided "as is" without express or implied warranty.`;
        case `BSD`:
        return licenseText = `
        BSD 3-Clause License

        Copyright (c) 2006, Ivan Sagalaev.
        All rights reserved.

        Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.

        * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.

        * Neither the name of the copyright holder nor the names of its
        contributors may be used to endorse or promote products derived from
        this software without specific prior written permission.

        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
        DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
        FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
        DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
        SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
        CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
        OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
        case `ISC`:
        return licenseText = `
        ISC License

        Copyright (c) Isaac Z. Schlueter and Contributors

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
        WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
        MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
        ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
        WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
        ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
        IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
        case `GNU`:
        return licenseText = `
        GNU License
        
        Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>

        The GNU General Public License is a free, copyleft license for
        software and other kinds of works.

        The licenses for most software and other practical works are designed
        to take away your freedom to share and change the works.  By contrast,
        the GNU General Public License is intended to guarantee your freedom to
        share and change all versions of a program--to make sure it remains free
        software for all its users.  We, the Free Software Foundation, use the
        GNU General Public License for most of our software; it applies also to
        any other work released this way by its authors.  You can apply it to
        your programs, too.

        When we speak of free software, we are referring to freedom, not
        price.  Our General Public Licenses are designed to make sure that you
        have the freedom to distribute copies of free software (and charge for
        them if you wish), that you receive source code or can get it if you
        want it, that you can change the software or use pieces of it in new
        free programs, and that you know you can do these things.

        To protect your rights, we need to prevent others from denying you
        these rights or asking you to surrender the rights.  Therefore, you have
        certain responsibilities if you distribute copies of the software, or if
        you modify it: responsibilities to respect the freedom of others.

        For example, if you distribute copies of such a program, whether
        gratis or for a fee, you must pass on to the recipients the same
        freedoms that you received.  You must make sure that they, too, receive
        or can get the source code.  And you must show them these terms so they
        know their rights.

        Developers that use the GNU GPL protect your rights with two steps:
        (1) assert copyright on the software, and (2) offer you this License
        giving you legal permission to copy, distribute and/or modify it.

        For the developers' and authors' protection, the GPL clearly explains
        that there is no warranty for this free software.  For both users' and
        authors' sake, the GPL requires that modified versions be marked as
        changed, so that their problems will not be attributed erroneously to
        authors of previous versions.

        Some devices are designed to deny users access to install or run
        modified versions of the software inside them, although the manufacturer
        can do so.  This is fundamentally incompatible with the aim of
        protecting users' freedom to change the software.  The systematic
        pattern of such abuse occurs in the area of products for individuals to
        use, which is precisely where it is most unacceptable.  Therefore, we
        have designed this version of the GPL to prohibit the practice for those
        products.  If such problems arise substantially in other domains, we
        stand ready to extend this provision to those domains in future versions
        of the GPL, as needed to protect the freedom of users.

        Finally, every program is threatened constantly by software patents.
        States should not allow patents to restrict development and use of
        software on general-purpose computers, but in those that do, we wish to
        avoid the special danger that patents applied to a free program could
        make it effectively proprietary.  To prevent this, the GPL assures that
        patents cannot be used to render the program non-free.`;
        case `APACHE`:
        return licenseText = `
        Apache License

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
    }
    return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ${renderLicenseBadge(response.license)}

  ${response.description}

  [Preview Application](${response.preview})

  ## Table of Contents  
  * [Installation](#installation)  
  * [Usage](#usage) 
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [Contributions](#contributions)
  * [Licensing](#licensing)
  * [Questions](#questions)

  ## Installation
  #### Run the command ${response.installation} to Install!
  
  ## Usage
  #### Use ${response.usage} CLI to run this Application.
  
  ## Tests
  #### ${response.tests} were used to ensure quality on this Application.

  ## Contributors
  #### The Contributors of this Application: ${response.contributors}.

  ## Contributions
  #### To contribute to this application, you can: ${response.contributions}

  ## Licensing
  ${renderLicenseBadge(response.license)}
  #### ${renderLicenseLink(response.license)}
  #### ${renderLicenseSection(response.license)}
  
  ## Questions
  #### GitHub Profile: [*${response.github}*](https://github.com/${response.github})
  #### Contact me or ask me questions at [${response.email}](mailto:${response.email}).
  `;
}

module.exports = generateMarkdown;
