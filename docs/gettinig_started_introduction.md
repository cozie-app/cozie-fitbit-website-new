---
id: home
title: Introduction
sidebar_label: Introduction
---

# Cozie - A Fitbit clock face for watch-based surveys  

## What is Cozie?

[Cozie](https://cozie.app/) is a Fitbit clock face that can ask people questions. It is useful for [ecological momentary assessments](https://en.wikipedia.org/wiki/Experience_sampling_method). The foundation for this project is the [BUDS Lab](https://www.budslab.org/) efforts towards human subjective feedback in the built environment.

<!--
A selection of publications is available under http://www.cozie.app/docs/research
-->

This documentation guides you on how to:
- Getting Started using the basic Cozie application for Fitbit as hosted by the [BUDS Lab](https://www.budslab.org/). In this scenario, you just want to test out the Cozie app on your own Fitbit immediately. The data will flow into our InfluxDB database and you can extract the data using our REST API. The following documentation pages focus on this use type.
- [Creating your own App](coc_installation.md) is a process in which you want to fork the Cozie repository and build your own version with custom questions, etc. You can also use this knowledge to contribute to the core repository.
- Advanced data connectivity discusses the collection of the data from your own app and tips on how to manage and store those data

## Fitbit SDK
Due to a break in the Fitbit SDK there are two slightly different Cozie Fitbit versions.

For older devices, such as the Fitbit Iconic, Versa, and Versa 2, the Fitbit OS SDK 4.2< needs to be used. The source code for the older SDK is available on the [cozie-fitbit-legacy branch](https://github.com/cozie-app/cozie/tree/cozie-fitbit-legacy) of the GitHub repository for Cozie Fitbit.

For newer devices, such as the Fitbit Versa 3 and Sense, the Fitbit OS SDK 5.0< needs to be used. The source code for this current SDK is available in the [Master branch](https://github.com/cozie-app/cozie) of the GitHub repository for Cozie Fitbit.

The documentation available under [Creating your own Cozie](coc_app_creation_setup.md) are based on the older SDK. However, the main differences is a slightly altered folder structure. Hence, it should also be mostly applicable to the Cozie for the new SDK.

## License
The Cozie clock face is open sourced under at GPLv3 License.


