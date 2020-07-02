# chain-data-light
Very light chain data access system

### create IAM user with admin privledges:
1. Serices->IAM
2. Users
3. Add user
  * enter username
  * select: AWS Management Console access
4. Next: permissions
5. Create group
  * group name: admin
  * select: AdministratorAccess
6. Create group
7. Next: Tags
8. Next: Review
9. Create user
  * Will show  Users with AWS Management Console access can sign-in at:
  * make note of this address as it will be where you and users will log in from
  * also the frist 12 digit number is needed for later steps
  * Select show password to get the password for the account
10. Close

### Sign up with digiassetX data services:
#At present sign up manually by sending mctrivia your amazon account number: 12 digit number in the url.


### create IAM user for data access
1. Services->IAM
2. In left column: Policies
3. Blue Create policy button
4. JSON

```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:GetObjectAcl",
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::*/*",
                "arn:aws:s3:::chain-data-address"
            ]
        }
    ]
}
```

5. Blue Review policy button
6. name: digiassetX_data
7. Blue Create policy
8. In left Column: Groups
9. Blue Create Group Button
10. Group Name: digiassetX_data
11. Type digi into search then select digiassetX_data
12. Blue Next Step Button
13. Blue Create Group Button
14. On left panel select Users
15. Blue add user button
16. user name: digiassetX_data
17. Select: Programmatic access
18. Blue Next: Permissions button
19. select: digiassetX_data
20. Blue Next: Tags button
21. Blue Next: Review button
22. Blue Create user button

23. Copy Access key ID and Secret access key into the constants at the top of the digiassetX_data library

24. click Close(make sure you have copied keys there will not be a second chance.
