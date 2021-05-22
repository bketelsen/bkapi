#!/bin/bash
RG=selfhostrg
NAME=bkapi
SUBID=28fc915c-f47b-406d-a7bf-f87e2f20f775

az ad sp create-for-rbac --name ${NAME} --role contributor --scopes /subscriptions/${SUBID}/resourceGroups/${RG} --sdk-auth
